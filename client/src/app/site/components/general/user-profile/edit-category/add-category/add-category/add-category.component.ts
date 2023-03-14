import { CategoryService } from './../../../../../../../services/category.service'
import { Subscription } from 'rxjs'
import { DynamicDialogRef } from 'primeng/dynamicdialog'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { EditCategoryComponent } from './../../edit-category.component'
import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  addCategoryForm!: FormGroup
  aSab!: Subscription

  constructor(
    public editComp: EditCategoryComponent,
    public categoryService: CategoryService,
    private ref: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.addCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      parentId: new FormControl(''),
    })

    if (this.categoryService.categories.length === 0) {
      this.addCategoryForm.get('parentId')?.disable()
    }
  }

  onAddCategory() {
    this.addCategoryForm.disable()

    let data = {
      name: this.addCategoryForm.get('name')?.value,
      parentId: this.addCategoryForm.get('parentId')?.value.data,
    }

    if (this.categoryService.categories.length === 0) {
      delete data.parentId
    }

    this.aSab = this.categoryService.addCategories(data).subscribe({
      next: () => {
        this.addCategoryForm.reset()
        this.ref.close()
        this.editComp.updateCategories()
      },
      error: () => {
        this.addCategoryForm.reset()
        this.addCategoryForm.enable()
      },
    })
  }

  ngOnDestroy() {
    if (this.aSab) {
      this.aSab.unsubscribe()
    }
  }
}
