import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/product.model';
import * as BasketActions from '../../state/baskets/baskets.actions';
import { Stores } from 'src/app/state/stores';
import { ProductService } from 'src/app/services/product.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(
    private store: Store<Stores['baskets']>,
    private _product: ProductService,
    private _basket: BasketService
  ) {
    this._product.getList(() => (this.products = _product.products));
  }

  ngOnInit(): void {
    // this.setProducts();
  }

  // setProducts() {
  //   for (let i = 0; i < 100; i++) {
  //     var product = new ProductModel();
  //     product.id = i;
  //     product.name = `Product ${i}`;
  //     product.stock = i * 100;
  //     product.unitPrice = i * 10;
  //     this.products.push(product);
  //   }
  // }

  addBasket(product: ProductModel) {
    var basket = new BasketModel();
    basket.product = product;
    basket.quantity = 1;

    this.store.dispatch(BasketActions.addBasket({ basket: basket }));
    this._basket.post(basket);
  }
}
