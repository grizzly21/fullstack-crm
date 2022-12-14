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
      {label: 'Товари'},
      {label: 'Оприбуткування'},
      {label: 'Залишки'},
      {label: 'Інвентаризація'},
    ]
  }
}
