import { AgentsService } from '../../../services/agents.service'
import { AddCounterpartyComponent } from './dialogs/add-counterparty/add-counterparty.component'
import { DialogService } from 'primeng/dynamicdialog'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-counterparties',
  templateUrl: './counterparties.component.html',
  styleUrls: ['./counterparties.component.scss'],
  providers: [DialogService],
})
export class CounterpartiesComponent implements OnInit {
  constructor(
    private dialogService: DialogService,
    public agentsService: AgentsService
  ) {}

  ngOnInit(): void {
    this.agentsService.getAllAgents()
  }

  openDialog() {
    this.dialogService.open(AddCounterpartyComponent, {
      header: 'Додати контрагента',
      width: '600px',
      closable: true,
      modal: true,
    })
  }
}
