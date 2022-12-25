import { Component } from '@angular/core';
import {ITask} from "../../classes/interfaces";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  showAddDialog: boolean = false

  tasks: ITask[] = [
    {
      sequenceNumber: 1,
      title: 'title',
      description: 'deskript',
      status: 'ready',
      date: Date.now().toString()
    },
    {
      sequenceNumber: 1,
      title: 'title',
      description: 'deskript',
      status: 'ready',
      date: Date.now().toString()
    },
    {
      sequenceNumber: 1,
      title: 'title',
      description: 'deskript',
      status: 'ready',
      date: Date.now().toString()
    }
  ]

  showDialog() {
    this.showAddDialog = true
    console.log(this.showAddDialog)
  }

  hideDialog(event: any){
    this.showAddDialog = false
    console.log(this.showAddDialog)
  }
}
