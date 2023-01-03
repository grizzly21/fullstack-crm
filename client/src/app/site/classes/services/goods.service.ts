import {fromEvent, map, mergeMap, Observable, tap} from 'rxjs';
import {ICategory, IGood} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GoodsService {
  public allGoods: IGood[] = []
  public categories: ICategory[] | any []= []
  private readonly apiUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

  uploadImage(image: FormData) {
    return this.http.post(`${this.apiUrl}attachments`, image)
  }

  getImageById(id: string) {
    return this.http.get(this.apiUrl + "attachments/" + id, {responseType: "blob"})
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
    return this.http.get<IGood[]>(this.apiUrl + 'products')
      .pipe(
        tap((goods) => {
          this.allGoods = goods
        })
      )
  }

  addGoods(good: IGood): Observable<IGood> {
    return this.http.post<IGood>(this.apiUrl + 'products', good)
  }


  getAllCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.apiUrl + 'categories')
      .pipe(
        tap((categories) => {
          this.categories = this.reMapArray(categories)
        })
      )
  }

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

  addCategories(category: {name: string, parentId: number}): Observable<number>{
    return this.http.post<number>(this.apiUrl + 'categories', category)
  }

  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + 'categories/' + id)
  }

  private toBase64(blob: Blob): Observable<string> {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    return fromEvent(reader, 'load')
      .pipe(map(() => reader.result as string))
  }
}
