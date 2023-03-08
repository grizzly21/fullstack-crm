import { Observable } from 'rxjs'
import { apiURL } from '../config/urls'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IAgent } from 'src/app/interfaces/agent.interface'

@Injectable()
export class AgentsService {
  public agents: IAgent[] = []

  constructor(private http: HttpClient) {}

  createAgent(agentData: IAgent): Observable<IAgent> {
    return this.http.post<IAgent>(`${apiURL}agents`, agentData)
  }

  getAllAgents() {
    this.http.get<IAgent[]>(`${apiURL}agents`).subscribe({
      next: (res: IAgent[]) => {
        this.agents = res
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}
