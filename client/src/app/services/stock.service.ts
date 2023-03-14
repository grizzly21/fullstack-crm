import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { apiURL } from '../config/urls'
import { IStock } from '../interfaces/stock.interface'

@Injectable()
export class StockService {
  public stocks!: IStock[]

  constructor(private http: HttpClient) {}

  createStocks(title: string) {
    return this.http.post(`${apiURL}stocks`, { title: title })
  }

  getStocks() {
    this.http.get<IStock[]>(`${apiURL}stocks`).subscribe(
      (next: IStock[]) => {
        this.stocks = next
      },
      (err) => {
        console.log(err)
      }
    )
  }

  deleteStocksById(id: number) {
    return this.http.delete(`${apiURL}stocks/${id}`)
  }

  createPosting(stock: number, data: any) {
    return this.http.post(`${apiURL}stocks/${stock}/postings`, data)
  }

  getAllPostings() {
    return this.http.get(`${apiURL}stocks/postings`)
  }

  getPostingById(id: number) {
    return this.http.get(`${apiURL}stocks/postings/${id}/products`)
  }
}
