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
    public goodsService: GoodsService,
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
      parentId: new FormControl(''),
    });

    if(this.goodsService.categories.length === 0){
      this.addCategoryForm.get('parentId')?.disable()
    }
  }

  onAddCategory() {
    this.addCategoryForm.disable()

    let data = {
      name: this.addCategoryForm.get('name')?.value,
      parentId: this.addCategoryForm.get('parentId')?.value.data
    }

    if(this.goodsService.categories.length === 0){
      delete data.parentId
    }

    this.goodsService.addCategories(data).subscribe(
      next => {
        this.addCategoryForm.reset()
        this.ref.close()
        this.editComp.updateCategories()
      },
      err => {
        this.addCategoryForm.reset()
        this.addCategoryForm.enable()
      }
    )
  }
}
