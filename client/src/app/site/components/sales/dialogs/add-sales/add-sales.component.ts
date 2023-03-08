import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { GoodsService } from '../../../../../services/goods.service'
import { AgentsService } from '../../../../../services/agents.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss'],
})
export class AddSalesComponent implements OnInit {
  addSaleForm!: FormGroup
  typesOfPaying!: any[]
  totalCount: number = 0

  constructor(
    public agentService: AgentsService,
    public goodsService: GoodsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.agentService.getAllAgents()
    this.goodsService.getAllLeavings()

    this.typesOfPaying = [
      { label: 'Готівкою', typeId: 0 },
      { label: 'Картою', typeId: 1 },
      { label: 'Змішана', typeId: 2 },
    ]

    this.addSaleForm = this.fb.group({
      agentId: ['', Validators.required],
      shift: ['', Validators.required],
      products: this.fb.array([
        this.fb.group({
          productId: ['', Validators.required],
          pricePerItem: [null, Validators.required],
          count: [1, Validators.required],
        }),
      ]),
    })
  }

  get products(): FormArray {
    return <FormArray>this.addSaleForm.get('products')
  }

  total(): void {
    this.totalCount = 0
    let data = this.addSaleForm.value
    let sum = 0
    data.products.forEach((element: any) => {
      sum += element.pricePerItem * element.count
    })
    this.totalCount = sum
  }

  newProduct(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      count: [null, Validators.required],
      pricePerItem: [null, Validators.required],
    })
  }

  addProducts() {
    this.products.push(this.newProduct())
  }

  removeProductControl(index: number) {
    if (index === 0) {
      alert('you cant delete last item')
    }
    ;(<FormArray>this.addSaleForm.get('products')).removeAt(index)
  }
}
