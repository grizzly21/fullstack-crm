import { Component } from '@angular/core';
import {ITask} from "../../classes/interfaces";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  showAddDialog: boolean = false

  tasks: ITask[] = []

  showDialog() {
    this.showAddDialog = true
    console.log(this.showAddDialog)
  }

  hideDialog(event: any){
    this.showAddDialog = false
    console.log(this.showAddDialog)
  }
}
