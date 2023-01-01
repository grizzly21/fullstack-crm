import { GoodsService } from './../../../../classes/services/goods.service';
import { Component, OnInit } from '@angular/core';
import { IGood } from '../../../../classes/interfaces';

@Component({
  selector: 'app-all-goods',
  templateUrl: './all-goods.component.html',
  styleUrls: ['./all-goods.component.scss'],
})
export class AllGoodsComponent implements OnInit {
  showAddDialog: boolean = false;
  goods: IGood[] = [];

  constructor(private goodsService: GoodsService) {}

  ngOnInit() {
    this.goodsService.getAllGoods().subscribe(
      (next) => {
        this.goods = next;
        console.log(next);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  showDialog() {
    this.showAddDialog = true;
  }

  hideDialog(event: any) {
    this.showAddDialog = false;
  }
}
