import { AddTaskComponent } from './pop-up/add-task/add-task.component';
import { TaskService } from './tasks-service/task.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../../classes/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  showAddDialog: boolean = false;

  tasks: ITask[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(
      next => {
        this.tasks = next
      },
      err => {
        console.error(err)
      }
    )
  }

  showDialog() {
    this.showAddDialog = true;
  }

  hideDialog(event: any) {
    this.showAddDialog = false;
  }
}
