import {Component, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddGoodsComponent} from "../a-goods-common-components/add-goods/add-goods.component";
import {GoodsService} from "../../../../classes/services/goods.service";

@Component({
  selector: 'app-all-goods',
  templateUrl: './all-goods.component.html',
  styleUrls: ['./all-goods.component.scss'],
  providers: [DialogService]
})
export class AllGoodsComponent implements OnInit {
  ref!: DynamicDialogRef;
  link: string = 'http://localhost:8080/attachments/'

  constructor(public goodsService: GoodsService,
              private dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.getAllGoods()
  }

  getAllGoods() {
    this.goodsService.getAllGoods().subscribe(
      (next) => {
        console.log(next);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getImage(id: string) {
    return this.goodsService.getImageById(id)
  }

  showDialog() {
    this.ref = this.dialogService.open(AddGoodsComponent, {
      header: 'Add good',
      width: '600px',
    })
  }

}
