import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { apiURL } from '../config/urls'
import { ICategory } from '../interfaces/category.inteface'

@Injectable()
export class CategoryService {
  public categories!: ICategory[]

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(apiURL + 'categories').pipe(
      tap((categories) => {
        this.categories = this.reMapArray(categories)
      })
    )
  }

  addCategories(category: {
    name: string
    parentId?: number
  }): Observable<number> {
    return this.http.post<number>(apiURL + 'categories', category)
  }

  deleteCategory(id: number) {
    return this.http.delete(apiURL + 'categories/' + id)
  }

  /* Common functions */

  private reMapArray(arr: any[]): any[] {
    return arr.map((item) => {
      return {
        label: item.name,
        data: item.id,
        parentId: item.parentId,
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: this.reMapArray(item.children),
      }
    })
  }
}
