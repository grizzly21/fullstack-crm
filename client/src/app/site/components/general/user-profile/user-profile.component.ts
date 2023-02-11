import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  userProfileNavItems!: MenuItem[]
  ngOnInit() {
    this.userProfileNavItems = [
      {label: 'Основні данні'/*, routerLink: 'main'*/},
      {label: 'Категорії товарів', routerLink: 'edit-category'},
      {label: 'Склади', routerLink: 'edit-stocks'},
      {label: 'Налаштування'/*, routerLink: 'settings'*/}
    ]
  }
}
