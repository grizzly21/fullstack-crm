import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { GoodsService } from './../../../../../../classes/services/goods.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { EditCategoryComponent } from './../../edit-category.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm!: FormGroup;

  constructor(
    public editComp: EditCategoryComponent,
    private primengConfig: PrimeNGConfig,
    private goodsService: GoodsService,
    private ref: DynamicDialogRef
  ) {
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body',
    };
  }

  ngOnInit(): void {
    this.addCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      parentId: new FormControl(null, Validators.required),
    });
  }

  onAddCategory() {
    this.addCategoryForm.disable()
    console.log(this.addCategoryForm.value);

    this.goodsService.addCategories(this.addCategoryForm.value).subscribe(
      next => {
        console.log(next)
        this.addCategoryForm.reset()
        this.ref.close()
      },
      err => {
        console.log(err),
        this.addCategoryForm.reset()
        this.addCategoryForm.enable()
      }
    )
  }
}
