import { tap } from 'rxjs';
import { Observable } from 'rxjs';
import { IGood } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GoodsService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/'

  public allGoods: IGood[] = []

  getAllGoods(): Observable<IGood[]>{
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
}
