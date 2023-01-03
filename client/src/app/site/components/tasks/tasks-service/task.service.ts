import { ITask } from './../../../classes/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  private readonly apiUrl: string = 'http://locahost:8080/'
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>();
  }
}
