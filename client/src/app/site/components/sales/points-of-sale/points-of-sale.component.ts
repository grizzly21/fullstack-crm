import { AddPointOfSalesComponent } from './../dialogs/add-point-of-sales/add-point-of-sales.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points-of-sale',
  templateUrl: './points-of-sale.component.html',
  styleUrls: ['./points-of-sale.component.scss'],
  providers: [DialogService]
})
export class PointsOfSaleComponent implements OnInit {
  pointsOfSales!: any[];

  constructor(private dialogService: DialogService){}

  ngOnInit(): void {
    this.pointsOfSales = [
      {
        isActive: true,
        name: 'Ternopil #1',
        type: 'Shoop',
        receipts: 1940,
        tickets: 10,
        averageTicket: 567,
        moneyInCashRegister: 10000
      },
      {
        isActive: false,
        name: 'Ternopil #2',
        type: 'Shoop',
        receipts: 1500,
        tickets: 1200,
        averageTicket: 250,
        moneyInCashRegister: 0
      },
    ];
  }

  openDialog(){
    this.dialogService.open(AddPointOfSalesComponent, {
      header: 'Додати точку продажу',
      width: '500px',
      modal: true
    })
  }
}
