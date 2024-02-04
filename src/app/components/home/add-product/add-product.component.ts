import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  @ViewChild('addForm') addForm: NgForm;
  constructor(private _product: ProductService) {}
  addProduct() {
    if (this.addForm.valid) {
      this._product.post(this.addForm.value, () => this.addForm.reset());
    }
    // console.log(this.addForm.value);
  }
}
