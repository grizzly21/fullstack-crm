import { ITask } from './../../../classes/interfaces';
import { Observable, tap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  private readonly apiUrl: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  tasks: ITask[] = [];

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl + 'tasks')
    .pipe(
      tap(item => {
        item.forEach(obj => {
          obj.status = {
            title: Statuses[+obj.status],
            status: obj.status
          }
        })
      })
    )
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl + 'tasks', task);
  }

  changeStatus(newStatus: number): Observable<number> {
    return this.http.put<number>(this.apiUrl + 'tasks/' + newStatus + '/status','');
  }

}

export enum Statuses{
  'Не завершений' = 0,
  'В роботі' = 1,
  'Виконано' = 2
}
