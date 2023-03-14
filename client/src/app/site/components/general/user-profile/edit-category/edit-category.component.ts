import { CategoryService } from './../../../../../services/category.service'
import { AddCategoryComponent } from './add-category/add-category/add-category.component'
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog'
import { Component, OnInit } from '@angular/core'
import { GoodsService } from '../../../../../services/goods.service'
import { ConfirmationService, TreeNode } from 'primeng/api'

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class EditCategoryComponent implements OnInit {
  constructor(
    public categoryService: CategoryService,
    private dialogService: DialogService,
    private confirmService: ConfirmationService
  ) {}

  ref!: DynamicDialogRef
  selectionCategory!: TreeNode

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      (next) => {
        console.log(next)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  confirmDelete() {
    this.confirmService.confirm({
      message: 'Are you sure to delete this category?',
      accept: () => {
        if (this.selectionCategory !== undefined) {
          console.log(this.selectionCategory)
          this.categoryService
            .deleteCategory(this.selectionCategory.data)
            .subscribe(
              (next) => {
                console.log(next)
                this.updateCategories()
              },
              (err) => {
                console.log(err)
                alert(err.error)
              }
            )
        } else {
          alert('Select category, please!')
        }
      },
    })
  }

  updateCategories() {
    this.categoryService.getAllCategories().subscribe(
      (next) => {
        console.log('updated')
      },
      (err) => {
        console.log('err')
      }
    )
  }

  showDialog() {
    this.ref = this.dialogService.open(AddCategoryComponent, {
      header: 'Додати категорію',
      closable: true,
      width: '450px',
    })
  }
}
