import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() sideBarToggle = new EventEmitter<boolean>();
  toggleEmit: boolean = false;

  constructor() {}

  ngOnInit() {}

  onMenuToggle(){
    this.sideBarToggle.emit(!this.toggleEmit);
    this.toggleEmit = !this.toggleEmit;
  }

}
