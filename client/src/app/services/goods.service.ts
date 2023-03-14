import { IStock } from '../interfaces/stock.interface'
import { ILeavings } from '../interfaces/leavings.interface'
import { apiURL } from '../config/urls'
import { fromEvent, map, mergeMap, Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IGood } from 'src/app/interfaces/good.interface'
import { ICategory } from 'src/app/interfaces/category.inteface'

@Injectable()
export class GoodsService {
  public allGoods!: IGood[]

  constructor(private http: HttpClient) {}

  //GOODS

  uploadImage(image: FormData) {
    return this.http.post(`${apiURL}attachments`, image)
  }

  getImageById(id: string) {
    return this.http
      .get(apiURL + 'attachments/' + id, { responseType: 'blob' })
      .pipe(mergeMap((res) => this.toBase64(res)))
      .subscribe(
        (next) => {
          console.log(next)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getAllGoods(): Observable<IGood[]> {
    return this.http.get<IGood[]>(apiURL + 'products').pipe(
      tap((goods) => {
        this.allGoods = goods
      })
    )
  }

  addGoods(good: IGood): Observable<IGood> {
    return this.http.post<IGood>(apiURL + 'products', good)
  }

  deleteGoods(id: number): Observable<any> {
    return this.http.delete<any>(`${apiURL}products/${id}`)
  }

  /* Common functions */

  private toBase64(blob: Blob): Observable<string> {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    return fromEvent(reader, 'load').pipe(map(() => reader.result as string))
  }

  public updateGoods() {
    this.getAllGoods().subscribe((next) => {
      console.log('updated Goods')
    })
  }
}
