import { formatDate } from '@angular/common';
import { GoodsService } from './../../../../classes/services/goods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavings',
  templateUrl: './leavings.component.html',
  styleUrls: ['./leavings.component.scss'],
})
export class LeavingsComponent implements OnInit {
  leavings: any = [];

  constructor(private goodsService: GoodsService) {}

  ngOnInit(): void {
    this.goodsService.getAllLeavings().subscribe({
      next: (res: any) => {
        this.leavings = res.map((item: any) => ({
          ...item,
          daysOnStock: this.daysOnStock(item.lastPostingDate),
          cost: (item.cost === null) ? {value: 0} : item.cost
        }));
        console.log(this.leavings);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  daysOnStock(lastPostingDate: Date): number | null {
    if (lastPostingDate !== null) {
      const today = new Date().getTime()
      const lastPDate = new Date(lastPostingDate).getTime()
      const diffDate = today - lastPDate
      return Math.floor(diffDate / (1000 * 60 * 60 * 24));
    } else {
      return 0;
    }
  }
}
