import { OnInit } from '@angular/core';
import { AddPostingsComponent } from './../a-goods-common-components/add-postings/add-postings.component';
import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss'],
  providers: [DialogService]
})
export class PostingComponent{
  constructor(public dialogService: DialogService) {}

  ref!: DynamicDialogRef;

  public posting = [
    {
      id: 1,
      time: '21.04.2023',
      storage: 'main',
      company: 'Ogrizok',
      total: 1200,
      currency: 'EUR',
    },
    {
      id: 2,
      time: '24.04.2023',
      storage: 'main',
      company: 'Ogrizok',
      total: 1400,
      currency: 'EUR',
    },
    {
      id: 3,
      time: '01.06.2023',
      storage: 'main',
      company: 'Ogrizok',
      total: 900,
      currency: 'EUR',
    },
  ];

  getEventValue($event: any): string {
    return $event.target?.value;
  }

  showDialog() {
    this.ref = this.dialogService.open(AddPostingsComponent, {
      header: 'Posting',
      width: '800px',
      height: '800px',
      closable: true
    })
  }
}
