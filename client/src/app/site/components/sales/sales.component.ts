import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{
  salesRoutes: MenuItem[] = []

  ngOnInit(){
    this.salesRoutes = [
      {label: 'Точки продаж', routerLink: 'points-of-sales'},
      {label: 'Продажі', routerLink: 'all-sales'},
      {label: 'Поверненя', routerLink: 'returns'},
      {label: 'Завдатки', routerLink: 'deposits'},
    ]
  }
}
