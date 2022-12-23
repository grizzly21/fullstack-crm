import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.scss']
})
export class AddGoodsComponent implements OnInit {

  @Input() addDialog!: boolean
  @Output() hideDialog = new EventEmitter<boolean>()

  categories: string[] = ["Phone", "Macbook", "Service", "Phone", "Service"]
  addGoodForm!: FormGroup

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body'
    }

    this.addGoodForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(null),
      description: new FormControl(null, [Validators.required]),
      code: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      article: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required])
    })
  }

  selectImage(event:any){
    this.addGoodForm.get('image')?.setValue(event.currentFiles[0])
  }

  onAddGood(){
    console.log(this.addGoodForm.value)
  }

  closeDialog() {
    this.addDialog = false
    this.hideDialog.emit(false)
  }
}
