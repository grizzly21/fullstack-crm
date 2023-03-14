import { LeavingsService } from './../../../../../services/leavings.service'
import { formatDate } from '@angular/common'
import { GoodsService } from '../../../../../services/goods.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-leavings',
  templateUrl: './leavings.component.html',
  styleUrls: ['./leavings.component.scss'],
})
export class LeavingsComponent implements OnInit {
  leavings: any = []

  constructor(public leavingsService: LeavingsService) {}

  ngOnInit(): void {
    this.leavingsService.getAllLeavings()
  }
}
