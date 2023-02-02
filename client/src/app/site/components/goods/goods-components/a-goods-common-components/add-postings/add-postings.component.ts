import {
  FormGroup,
  FormControl,
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
    this.goodsService.getStocks();

    this.currensies = [
      { label: 'USD', code: 0 },
      { label: 'UAH', code: 1 },
    ];

    this.addPostingForm = this.fb.group({
      stock: ['', Validators.required],
      currency: [null, Validators.required],
      products: this.fb.array([
        {
          productId: [null, Validators.required],
          count: [0, Validators.required],
          pricePerItem: [0, Validators.required],
        },
        {
          productId: [null, Validators.required],
          count: [0, Validators.required],
          pricePerItem: [0, Validators.required],
        },
        {
          productId: [null, Validators.required],
          count: [0, Validators.required],
          pricePerItem: [0, Validators.required],
        },
      ]),
    });
  }

  get products(): FormArray {
    return <FormArray>this.addPostingForm.get('products');
  }

  newProduct(): FormGroup {
    return this.fb.group({
      productId: [null, Validators.required],
      count: [0, Validators.required],
      pricePerItem: [0, Validators.required],
    });
  }

  addProducts(){
    this.products.push(this.newProduct())
  }

  removeProductControl(index: number) {
    (<FormArray>this.addPostingForm.get('products')).removeAt(index);
  }

  getTotalPrice() {
    let form = this.addPostingForm;
    return (this.totalPrice =
      +form.get('pricePerItem')?.value * +form.get('count')?.value);
  }

  getCurrency(code: any) {
    return code.selectedOption.label;
  }
}
