import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { apiURL } from '../config/urls'
import { ILeavings } from '../interfaces/leavings.interface'

@Injectable()
export class LeavingsService {
  public leavings!: ILeavings[]

  constructor(private http: HttpClient) {}

  getAllLeavings(): void {
    this.http.get<ILeavings[]>(`${apiURL}leavings`).subscribe({
      next: (res: any) => {
        this.leavings = res.map((item: any) => ({
          ...item,
          daysOnStock: this.daysOnStock(item.lastPostingDate),
          cost: item.cost === null ? { value: 0 } : item.cost,
        }))
        console.log(this.leavings)
      },
      error: (err) => {
        console.error(err)
      },
    })
  }

  /* Common functions */

  daysOnStock(lastPostingDate: Date): number | null {
    if (lastPostingDate !== null) {
      const today = new Date().getTime()
      const lastPDate = new Date(lastPostingDate).getTime()
      const diffDate = today - lastPDate
      return Math.floor(diffDate / (1000 * 60 * 60 * 24))
    } else {
      return 0
    }
  }
}
