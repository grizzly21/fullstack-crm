import { ITask } from './../../../../classes/interfaces';
import { TasksComponent } from './../../tasks.component';
import { TaskService } from './../../tasks-service/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [DynamicDialogRef, DialogService],
})
export class AddTaskComponent implements OnInit {
  @Input() addDialog!: boolean;
  @Output() hideDialog = new EventEmitter<boolean>();

  statuses!: any[];
  addTaskForm!: FormGroup;
  minDate!: Date;
  editTaskData!: ITask | any;

  constructor(
    private primengConfig: PrimeNGConfig,
    public taskService: TaskService,
    private tasksComponent: TasksComponent,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body',
    };

    this.statuses = [
      { label: 'Не завершений', value: 0 },
      { label: 'В роботі', value: 1 },
      { label: 'Виконано', value: 2 },
    ];

    this.addTaskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      targetDate: new FormControl(null, [Validators.required]),
    });

    this.minDate = new Date();

    if(this.config.data){
      this.editTaskData = this.config.data?.task
      this.addTaskForm.setValue({
        title: this.editTaskData.title,
        description: this.editTaskData.description,
        status: this.editTaskData.status.status,
        targetDate: formatDate(this.editTaskData.targetDate, 'dd.MM.YYYY', 'en-US')
      })

      this.addTaskForm.get('title')?.disable()
      this.addTaskForm.get('description')?.disable()
      this.addTaskForm.get('targetDate')?.disable()
    }
  }

  onAddTask() {
    if(this.editTaskData?.id){
      this.taskService.changeStatus(this.editTaskData.id, +this.addTaskForm.get('status')?.value)
        .subscribe(
          next => {
            this.tasksComponent.updateTasks()
            this.editTaskData = {}
            this.ref.close()
          },
          err => {
            console.log(err)
          }
        )
    }else{
      this.taskService.addTask(this.addTaskForm.value).subscribe(
        (next) => {
          this.addTaskForm.reset();
          this.tasksComponent.updateTasks();
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
