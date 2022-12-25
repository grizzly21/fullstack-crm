import {Component, EventEmitter, Input, LOCALE_ID, OnInit, Output} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

  @Input() addDialog!: boolean
  @Output() hideDialog = new EventEmitter<boolean>()

  statuses!: any[]
  addTaskForm!: FormGroup
  minDate!: Date

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(){
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body'
    }

    this.statuses = [
      {label: "To do", value: 'todo'},
      {label: "In process", value: 'process'},
      {label: "Complete", value: 'complete'},
    ]

    this.addTaskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required])
    })

    this.minDate = new Date()
  }

  onAddTask(){
    console.log(this.addTaskForm.value)
  }

  closeDialog() {
    this.addTaskForm.reset()
    this.addDialog = false
    this.hideDialog.emit(false)
  }
}
