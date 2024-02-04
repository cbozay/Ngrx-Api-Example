import { createReducer, on } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import * as BasketActions from './baskets.actions';

export const initialState: BasketModel[] = [];

export const BasketsReducer = createReducer(
  initialState,
  on(BasketActions.addBasket, (state, action) => {
    return [...state, action.basket];
  })
);

//Şayet bir parametre göndereceksek bunu props ile sağlarız.
//props<{"basket":BasketModel}>() ifadesinin anlamı: Sana adını basket
//verdiğim BasketModel tipinden bir değer gelecek. Bu "basket"
//isimli parametreyi yakalamak içinse bir sonraki fonksiyona gelip,
//(state,{basket})=>... şeklinde gelen basket parametresini yakalıyorum.
//Fonksiyonun devamında gelen =>{return [...state,basket];} anlamı:
//initial state olan [] array içerisinde ne varsa dök, içerisine basket i
//ekleyip, array olarak paketle...Yani burada yapılan iş, state üzerinde
//değişiklikler yapmaktır...
//Başlangıç değeri belli ve sabit bir number değer olan initialState
//sözkonusu olup da biz bu değeri manipüle etmek istersek, bu durumda
//props göndermek mantıksız olacaktır... Haliyle manipülasyon işlemi
//(state)=>state*4 gibisinden bir fonksiyon ile başlangıç state sini
//değiştirebiliriz.
