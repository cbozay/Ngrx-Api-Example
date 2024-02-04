import { createAction, props } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';

export const addBasket = createAction(
  '[Baskets] AddProduct',
  props<{ basket: BasketModel }>()
);
