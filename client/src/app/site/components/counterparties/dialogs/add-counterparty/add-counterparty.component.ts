import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentsService } from './../../../../classes/services/agents.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-counterparty',
  templateUrl: './add-counterparty.component.html',
  styleUrls: ['./add-counterparty.component.scss'],
})
export class AddCounterpartyComponent implements OnInit{
  addAgentForm!: FormGroup

  constructor(
    private ref: DynamicDialogRef,
    private agenstService: AgentsService
  ) {}

  ngOnInit(): void {
    this.addAgentForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    })
  }

  onAddAgent(){
    this.agenstService.createAgent(this.addAgentForm.value).subscribe({
      next: (res) => {
        console.log(res)
        this.agenstService.getAllAgents()
        this.ref.close()
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
