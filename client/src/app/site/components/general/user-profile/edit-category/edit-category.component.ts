import { AddCategoryComponent } from './add-category/add-category/add-category.component';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../../../classes/services/goods.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
  providers: [DialogService]
})
export class EditCategoryComponent implements OnInit {
  constructor(public goodsService: GoodsService, private dialogService: DialogService) {}

  ref!: DynamicDialogRef;

  public catArray: any[] = []

  ngOnInit() {
    this.goodsService.getAllCategories().subscribe(
      next => {
        this.catArray = next.map((item) => {
          return {
            label: item.name,
            data: item.id,
            children: item.children,
            parentId: item.parentId,
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder",
          }
        })

        console.log(this.catArray)
      },
      error => {
        console.error(error);
      }
    );
  }

  showDialog(){
    this.ref = this.dialogService.open(AddCategoryComponent, {
      header: 'Додати категорію',
      closable: true,
      width: '450px'
    })
  }
}
