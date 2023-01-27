import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GoodsService } from '../../../../../classes/services/goods.service';

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.scss'],
})
export class AddGoodsComponent implements OnInit {
  categories: string[] = ['Phone'];
  addGoodForm!: FormGroup;

  constructor(
    private primengConfig: PrimeNGConfig,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public goodsService: GoodsService
  ) {}

  ngOnInit() {
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body',
    };

    this.addGoodForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      attachments: new FormControl(null),
      description: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      article: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      categoryId: new FormControl(null, [Validators.required]),
    });
  }

  selectImage(event: any) {
    const uploadData = new FormData();
    uploadData.append('attachment', event.files[0]);

    this.goodsService.uploadImage(uploadData).subscribe(
      (next) => {
        this.addGoodForm.get('attachments')?.setValue([next]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onAddGood(form: any) {
    let categoryId = this.addGoodForm.get('categoryId')?.value;

    console.log(this.addGoodForm.value);
    this.addGoodForm.disable();

    if (this.addGoodForm.get('attachments')?.value === null) {
      this.addGoodForm.get('attachments')?.setValue([]);
    }

    const data = this.addGoodForm.value;
    data.currency = 1;
    data.categoryId = categoryId.data;

    this.goodsService.addGoods(this.addGoodForm.value).subscribe(
      (next) => {
        this.addGoodForm.reset();
        this.addGoodForm.enable();
        form.clear();
        this.closeDialog()
        this.goodsService.updateGoods()
      },
      (error) => {
        this.addGoodForm.enable();
      }
    );
  }

  closeDialog() {
    this.ref.close();
  }
}
