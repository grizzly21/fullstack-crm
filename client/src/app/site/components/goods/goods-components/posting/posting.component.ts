import { PostingDetailsComponent } from './../a-goods-common-components/posting-details/posting-details.component';
import { formatDate } from '@angular/common';
import { GoodsService } from './../../../../classes/services/goods.service';
import { OnInit } from '@angular/core';
import { AddPostingsComponent } from './../a-goods-common-components/add-postings/add-postings.component';
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss'],
  providers: [DialogService],
})
export class PostingComponent implements OnInit{
  constructor(
    public dialogService: DialogService,
    private goodsService: GoodsService,
  ) {}

  ref!: DynamicDialogRef;

  public postings: any = [];

  ngOnInit(){
    this.getAllPostings()
  }

  getAllPostings() {
    this.goodsService.getAllPostings().subscribe({
      next: (res: any)=> {
        this.postings = res
      }
    })
  }

  getEventValue($event: any): string {
    return $event.target?.value;
  }

  showDialog() {
    this.ref = this.dialogService.open(AddPostingsComponent, {
      header: 'Оприбуткування',
      width: '800px',
      height: '800px',
      closable: true,
    });
  }

  showDialogById(data: any){
    this.ref = this.dialogService.open(PostingDetailsComponent, {
      header: `Оприбуткування №${data.id} від ${formatDate(data.date, 'dd.MM.YYYY hh:mm', 'en-US')}`,
      width: '1000px',
      height: '800px',
      closable: true,
      data: data
    })
  }
}
