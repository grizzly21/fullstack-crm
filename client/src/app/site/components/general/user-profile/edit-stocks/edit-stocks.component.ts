import { StockService } from './../../../../../services/stock.service'
import { ConfirmationService } from 'primeng/api'
import { GoodsService } from '../../../../../services/goods.service'
import { OnInit } from '@angular/core'
import { Component } from '@angular/core'

@Component({
  selector: 'app-edit-stocks',
  templateUrl: './edit-stocks.component.html',
  styleUrls: ['./edit-stocks.component.scss'],
  providers: [ConfirmationService],
})
export class EditStocksComponent implements OnInit {
  dialogToggle: boolean = false
  stockTitle: string = ''

  constructor(
    public stockService: StockService,
    private confDialog: ConfirmationService
  ) {}

  ngOnInit() {
    this.stockService.getStocks()
  }

  addStock() {
    if (!this.stockTitle) {
      alert('Please input title of new stock')
      return
    }
    this.stockService.createStocks(this.stockTitle).subscribe({
      next: (response) => {
        console.log(response)
        this.dialogToggle = false
        this.stockTitle = ''
        this.stockService.getStocks()
      },
      error: (err) => {
        this.stockTitle = ''
        console.log(err)
      },
    })
  }

  deleteStock(stockId: number) {
    this.confDialog.confirm({
      message: 'Ви впевнені що хочете видалити цей склад?',
      accept: () => {
        this.stockService.deleteStocksById(stockId).subscribe({
          next: () => alert('Deleted!'),
          error: (err) => console.log(err),
        })
      },
    })
  }
}
