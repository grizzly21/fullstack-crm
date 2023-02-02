import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";
import {GoodsService} from "../../classes/services/goods.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit{

  items!: MenuItem[]

  constructor(private goodsService: GoodsService) {
  }

  ngOnInit() {
    this.items = [
      {label: 'Товари', routerLink: 'all-goods'},
      {label: 'Оприбуткування', routerLink: 'posting'},
      {label: 'Залишки', routerLink: 'leavings'},
      {label: 'Інвентаризація', routerLink: 'inventory'},
    ]

    this.goodsService.getAllCategories().subscribe(
      next => {},
      error => {
        console.log(error)
      }
    )
  }
}
