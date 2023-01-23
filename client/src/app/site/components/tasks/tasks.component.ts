import { ConfirmationService } from 'primeng/api';
import { AddTaskComponent } from './pop-up/add-task/add-task.component';
import { DialogService } from 'primeng/dynamicdialog';
import { TaskService } from './tasks-service/task.service';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../../classes/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class TasksComponent implements OnInit {
  showAddDialog: boolean = false;

  tasks: ITask[] = [];

  constructor(
    private taskService: TaskService,
    private confirmService: ConfirmationService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.updateTasks()
  }

  updateTasks(){
    this.taskService.getAllTasks().subscribe(
      (next) => {
        this.tasks = next;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  checkDate(targetDate: Date): boolean {
    let today = new Date().getTime();
    let target = new Date(targetDate).getTime();
    if (target < today) {
      return true;
    }
    return false;
  }

  deleteTask(id: number) {
    this.confirmService.confirm({
      message: 'Are you sure to delete this task?',
      accept: () => {
        this.taskService.deleteTask(id).subscribe(() => {this.updateTasks()});
      },
    });
  }

  showDialog() {
    this.dialogService.open(AddTaskComponent, {
      header: 'Add Task',
      width: '600px'
    })
  }
}
