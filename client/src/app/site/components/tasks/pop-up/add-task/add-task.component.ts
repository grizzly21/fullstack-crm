import { TasksComponent } from './../../tasks.component';
import { TaskService } from './../../tasks-service/task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [DynamicDialogRef, DynamicDialogConfig, DialogService],
})
export class AddTaskComponent implements OnInit {
  @Input() addDialog!: boolean;
  @Output() hideDialog = new EventEmitter<boolean>();

  statuses!: any[];
  addTaskForm!: FormGroup;
  minDate!: Date;

  constructor(
    private primengConfig: PrimeNGConfig,
    public taskService: TaskService,
    private tasksComponent: TasksComponent,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    console.log(this.config)

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
  }

  onAddTask() {
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

  closeDialog() {
    this.ref.close()
  }
}
