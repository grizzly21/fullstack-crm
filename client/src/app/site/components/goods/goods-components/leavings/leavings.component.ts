import { GoodsService } from './../../../../classes/services/goods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavings',
  templateUrl: './leavings.component.html',
  styleUrls: ['./leavings.component.scss']
})
export class LeavingsComponent implements OnInit{
  leavings: any = []

  constructor(private goodsService: GoodsService) {}

  ngOnInit(): void{
    this.goodsService.getAllLeavings().subscribe({
      next: (res) => {
        this.leavings = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
