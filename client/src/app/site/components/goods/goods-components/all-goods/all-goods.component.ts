import {Component} from '@angular/core';
import {IGood} from "../../../../classes/interfaces";

@Component({
  selector: 'app-all-goods',
  templateUrl: './all-goods.component.html',
  styleUrls: ['./all-goods.component.scss']
})
export class AllGoodsComponent {

  showAddDialog: boolean = false

  goods: IGood[] = [
    {
      id: "2",
      name: "iphone",
      imageUrl: "none",
      description: "iphone",
      article: "none",
      category: "phones",
      code: 431123,
      price: 1200
    },
    {
      id: "3",
      name: "iphone",
      imageUrl: "none",
      description: "iphone",
      article: "none",
      category: "phones",
      code: 431123,
      price: 1200
    },
    {
      id: "4",
      name: "iphone",
      imageUrl: "none",
      description: "iphone",
      article: "none",
      category: "phones",
      code: 431123,
      price: 1200
    },
  ]

  showDialog() {
    this.showAddDialog = true
    console.log(this.showAddDialog)
  }

  hideDialog(event: any){
    this.showAddDialog = false
    console.log(this.showAddDialog)
  }
}
