import { ILeavings } from './../interfaces';
import { apiURL } from './../../../konfig/urls';
import {fromEvent, map, mergeMap, Observable, tap} from 'rxjs';
import {ICategory, IGood} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GoodsService {
  public allGoods: IGood[] = []
  public categories!: ICategory[] | any []
  public leavings!: ILeavings[]

  constructor(private http: HttpClient) {
  }

  //GOODS

  uploadImage(image: FormData) {
    return this.http.post(`${apiURL}attachments`, image)
  }

  getImageById(id: string) {
    return this.http.get(apiURL + "attachments/" + id, {responseType: "blob"})
      .pipe(
        mergeMap(res => this.toBase64(res))
      ).subscribe(
        next => {
          console.log(next)
        },
        error => {
          console.log(error)
        }
      )
  }

  getAllGoods(): Observable<IGood[]> {
    return this.http.get<IGood[]>(apiURL + 'products')
      .pipe(
        tap((goods) => {
          this.allGoods = goods
        })
      )
  }

  addGoods(good: IGood): Observable<IGood> {
    return this.http.post<IGood>(apiURL + 'products', good)
  }

  deleteGoods(id: number): Observable<any>{
    return this.http.delete<any>(`${apiURL}products/${id}`)
  }

  //CATEGORIES

  getAllCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(apiURL + 'categories')
      .pipe(
        tap((categories) => {
          this.categories = this.reMapArray(categories)
        })
      )
  }

  addCategories(category: {name: string, parentId?: number}): Observable<number>{
    return this.http.post<number>(apiURL + 'categories', category)
  }

  deleteCategory(id: number) {
    return this.http.delete(apiURL + 'categories/' + id)
  }

  // STOCKS AND POSTINGS

  public stocks!: any

  createStocks(title: string){
    return this.http.post(`${apiURL}stocks`, {title: title})
  }

  getStocks() {
    this.http.get(`${apiURL}stocks`).subscribe(
      next => {
        this.stocks = next
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteStocksById(id: number){
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

  // LEAVINGS

  getAllLeavings(): void {
    this.http.get<ILeavings[]>(`${apiURL}leavings`).subscribe({
      next: (res: any) => {
        this.leavings = res.map((item: any) => ({
          ...item,
          daysOnStock: this.daysOnStock(item.lastPostingDate),
          cost: (item.cost === null) ? {value: 0} : item.cost
        }));
        console.log(this.leavings);
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  /* Common functions */

  private reMapArray(arr: any[]): any[]{
    return arr.map((item) => {
      return {
        label: item.name,
        data: item.id,
        parentId: item.parentId,
        expandedIcon: "pi pi-folder-open",
        collapsedIcon: "pi pi-folder",
        children: this.reMapArray(item.children),
      }
    })
  }

  private toBase64(blob: Blob): Observable<string> {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    return fromEvent(reader, 'load')
      .pipe(map(() => reader.result as string))
  }

  public updateGoods(){
    this.getAllGoods().subscribe(
      next => {
        console.log('updated Goods')
      }
    )
  }

  daysOnStock(lastPostingDate: Date): number | null {
    if (lastPostingDate !== null) {
      const today = new Date().getTime()
      const lastPDate = new Date(lastPostingDate).getTime()
      const diffDate = today - lastPDate
      return Math.floor(diffDate / (1000 * 60 * 60 * 24));
    } else {
      return 0;
    }
  }
}
