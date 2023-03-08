import { ITask } from 'src/app/interfaces/task.interface'
import { Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class TaskService {
  private readonly apiUrl: string = 'http://localhost:8080/'
  constructor(private http: HttpClient) {}

  tasks: ITask[] = []

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl + 'tasks').pipe(
      tap((item) => {
        item.forEach((obj) => {
          obj.status = {
            title: Statuses[+obj.status],
            status: +obj.status,
          }
        })
      })
    )
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl + 'tasks', task)
  }

  changeStatus(id: number, newStatus: number): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}tasks/${id}/status?status=${+newStatus}`,
      ''
    )
  }

  deleteTask(id: number) {
    return this.http.delete(this.apiUrl + 'tasks/' + id)
  }
}

export enum Statuses {
  'Не завершений' = 0,
  'В роботі' = 1,
  'Виконано' = 2,
}
