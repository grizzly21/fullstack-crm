import { Observable } from 'rxjs';
import { apiURL } from './../../../konfig/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AgentsService {

  public agents: any = []

  constructor(private http: HttpClient){}

  createAgent(agentData: any): Observable<any> {
    return this.http.post<any>(`${apiURL}agents`, agentData)
  }

  getAllAgents() {
    this.http.get(`${apiURL}agents`).subscribe({
      next: (res) => {
        this.agents = res
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
