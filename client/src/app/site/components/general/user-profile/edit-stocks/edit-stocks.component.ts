import { ConfirmationService } from 'primeng/api';
import { GoodsService } from './../../../../classes/services/goods.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-stocks',
  templateUrl: './edit-stocks.component.html',
  styleUrls: ['./edit-stocks.component.scss'],
  providers: [ConfirmationService]
})
export class EditStocksComponent implements OnInit {
  dialogToggle: boolean = false
  stockTitle: string = ""

  constructor(public goodsService: GoodsService, private confDialog: ConfirmationService) {}

  ngOnInit() {
    this.goodsService.getStocks()
  }

  addStock(){
    if(!this.stockTitle){
      alert('Please input title of new stock')
      return
    }
    this.goodsService.createStocks(this.stockTitle).subscribe({
      next: (response) => {
        console.log(response)
        this.dialogToggle = false
        this.stockTitle = ''
        this.goodsService.getStocks()
      },
      error: (err) => {
        this.stockTitle = ''
        console.log(err)
      }
    })
  }

  deleteStock(stockId: number){
    this.confDialog.confirm({
      message: 'Ви впевнені що хочете видалити цей склад?',
      accept: () => {
        this.goodsService.deleteStocksById(stockId).subscribe({
          next: () => alert('Deleted!'),
          error: (err) => console.log(err)
        })
      }
    })

  }
}
