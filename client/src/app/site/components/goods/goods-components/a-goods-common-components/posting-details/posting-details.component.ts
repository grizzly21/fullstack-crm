import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { OnInit } from '@angular/core';
import { GoodsService } from './../../../../../classes/services/goods.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.scss']
})
export class PostingDetailsComponent implements OnInit{
  public postingsDetails!: any

  constructor(
    private goodsService: GoodsService,
    private config: DynamicDialogConfig){}

  ngOnInit(): void {
    this.goodsService.getPostingById(this.config.data.id).subscribe({
      next: (posting) => {
        this.postingsDetails = posting
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
