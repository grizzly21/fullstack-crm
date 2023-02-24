import { AddSalesComponent } from '../dialogs/add-sales/add-sales.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.scss'],
  providers: [DialogService],
})
export class AllSalesComponent {
  constructor(private dialogService: DialogService) {}

  openDialog() {
    this.dialogService.open(AddSalesComponent, {
      header: 'Додати продажу',
      width: '800px',
      height: '800px',
      modal: true,
    });
  }
}
