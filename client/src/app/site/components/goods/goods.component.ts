import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-goods',
  templateUrl: '/goods.component.html',
  styleUrls: ['/goods.component.scss']
})
export class GoodsComponent implements OnInit{

  items!: MenuItem[]
  ngOnInit() {
    this.items = [
      {label: 'Товари', routerLink: 'all-goods'},
      {label: 'Оприбуткування', routerLink: 'posting'},
      {label: 'Залишки', routerLink: 'leavings'},
      {label: 'Інвентаризація', routerLink: 'inventory'},
    ]
  }

  itemChange(event: any){
    console.log(event)
  }
}
