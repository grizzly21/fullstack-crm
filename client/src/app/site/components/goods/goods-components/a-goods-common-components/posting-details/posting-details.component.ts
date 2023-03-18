import { StockService } from './../../../../../../services/stock.service'
import { DynamicDialogConfig } from 'primeng/dynamicdialog'
import { OnInit } from '@angular/core'
import { Component } from '@angular/core'

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.scss'],
})
export class PostingDetailsComponent implements OnInit {
  public postingsDetails!: any

  constructor(
    private stockService: StockService,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.stockService.getPostingById(this.config.data.id).subscribe({
      next: (posting) => {
        this.postingsDetails = posting
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}
