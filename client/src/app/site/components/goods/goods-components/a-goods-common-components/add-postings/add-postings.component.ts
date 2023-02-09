import {
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { GoodsService } from './../../../../../classes/services/goods.service';
import { OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-postings',
  templateUrl: './add-postings.component.html',
  styleUrls: ['./add-postings.component.scss'],
})
export class AddPostingsComponent implements OnInit {
  currensies: any[] = [];
  totalPrice: number = 0.0;

  addPostingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public goodsService: GoodsService
  ) {
    this.primengConfig.overlayOptions = {
      mode: 'overlay',
      appendTo: 'body',
    };
  }

  ngOnInit(): void {
    if(this.goodsService.allGoods.length === 0){
      this.goodsService.getAllGoods().subscribe()
    }
    this.goodsService.getStocks();

    this.currensies = [
      { label: 'USD', code: 0 },
      { label: 'UAH', code: 1 },
    ];

    this.addPostingForm = this.fb.group({
      stock: ['', Validators.required],
      currency: [0, Validators.required],
      products: this.fb.array([
        this.fb.group({
          productId: ['', Validators.required],
          pricePerItem: [null, Validators.required],
          count: [null, Validators.required],
        })
      ]),
    });
  }

  onAddPosting(){
    let data = this.addPostingForm.value
    data.products.forEach((product: {
      currency: any; productId: { id: any; };
    }) => {
      let id = product.productId.id
      product.productId = id
      product.currency = data.currency
    });
    delete data.currency

    console.log(data)

    this.goodsService.createPosting(data).subscribe(
      next => console.log(next)
    )
  }

  get products(): FormArray {
    return <FormArray>this.addPostingForm.get('products');
  }

  newProduct(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      count: [null, Validators.required],
      pricePerItem: [null, Validators.required],
    });
  }

  addProducts(){
    this.products.push(this.newProduct())
  }

  removeProductControl(index: number) {
    if(index === 0){
      alert('you cant delete last item')
    }
    (<FormArray>this.addPostingForm.get('products')).removeAt(index);
  }
}
