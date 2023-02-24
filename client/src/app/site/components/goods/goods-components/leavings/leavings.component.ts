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

  constructor(public goodsService: GoodsService) {}

  ngOnInit(): void {
    this.goodsService.getAllLeavings()
  }
}
