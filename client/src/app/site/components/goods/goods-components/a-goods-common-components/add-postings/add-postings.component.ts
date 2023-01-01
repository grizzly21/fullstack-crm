import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-postings',
  templateUrl: './add-postings.component.html',
  styleUrls: ['./add-postings.component.scss']
})
export class AddPostingsComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ){}
}
