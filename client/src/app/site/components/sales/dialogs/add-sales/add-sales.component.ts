import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoodsService } from './../../../../classes/services/goods.service';
import { AgentsService } from './../../../../classes/services/agents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss'],
})
export class AddSalesComponent implements OnInit {
  addSaleForm!: FormGroup;

  constructor(
    public agentService: AgentsService,
    public goodsService: GoodsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.agentService.getAllAgents();

    this.addSaleForm = this.fb.group({
      agentId: ['', Validators.required],
      shift: ['', Validators.required],
      products: this.fb.array([
        this.fb.group({
          productId: ['', Validators.required],
          pricePerItem: [null, Validators.required],
          count: [null, Validators.required],
        }),
      ]),
    })
  }

  get products(): FormArray {
    return <FormArray>this.addSaleForm.get('products');
  }

  newProduct(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      count: [null, Validators.required],
      pricePerItem: [null, Validators.required],
    });
  }

  addProducts() {
    this.products.push(this.newProduct());
  }

  removeProductControl(index: number) {
    if (index === 0) {
      alert('you cant delete last item');
    }
    (<FormArray>this.addSaleForm.get('products')).removeAt(index);
  }
}
