import { CategoryService } from './../../../services/category.service'
import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { GoodsService } from '../../../services/goods.service'

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {
  items!: MenuItem[]

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.items = [
      { label: 'Товари', routerLink: 'all-goods' },
      { label: 'Оприбуткування', routerLink: 'posting' },
      { label: 'Залишки', routerLink: 'leavings' },
      { label: 'Інвентаризація', routerLink: 'inventory' },
    ]

    this.categoryService.getAllCategories().subscribe(
      (next) => {},
      (error) => {
        console.log(error)
      }
    )
  }
}
