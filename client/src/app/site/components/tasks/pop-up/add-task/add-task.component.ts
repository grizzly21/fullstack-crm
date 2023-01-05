import { TaskService } from './../../tasks-service/task.service';
import {
  Component,
  EventEmitter,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Input() addDialog!: boolean;
  @Output() hideDialog = new EventEmitter<boolean>();

  statuses!: any[];
  addTaskForm!: FormGroup;
  minDate!: Date;

  constructor(
    private primengConfig: PrimeNGConfig,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body',
    };

    this.statuses = [
      { label: 'To do', value: 0 },
      { label: 'In process', value: 1 },
      { label: 'Complete', value: 2 },
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
    console.log(this.addTaskForm.value);

    this.taskService.addTask(this.addTaskForm.value).subscribe(
      (next) => {
        console.log(next);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  closeDialog() {
    this.addTaskForm.reset();
    this.addDialog = false;
    this.hideDialog.emit(false);
  }
}
