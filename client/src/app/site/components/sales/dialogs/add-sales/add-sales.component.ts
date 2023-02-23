import { AgentsService } from './../../../../classes/services/agents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent implements OnInit{

  constructor(public agentService: AgentsService){}

  ngOnInit(): void {
      this.agentService.getAllAgents()
  }
}
