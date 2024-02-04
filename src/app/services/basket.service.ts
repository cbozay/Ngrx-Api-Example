import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { Store } from '@ngrx/store';
import { Stores } from '../state/stores';
import * as BasketActions from '../state/baskets/baskets.actions';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  api: string = 'http://localhost:3000/baskets';
  baskets: BasketModel[] = [];
  constructor(
    private _http: HttpClient,
    private store: Store<Stores['baskets']>
  ) {}

  post(model: BasketModel) {
    this._http
      .post<any>(this.api, model)
      .subscribe((res) =>
        this.store.dispatch(BasketActions.addBasket({ basket: model }))
      );
  }

  getList(callBack: () => void) {
    this._http
      .get(this.api)
      .subscribe((res) => ((res = this.baskets), callBack()));
  }
}
