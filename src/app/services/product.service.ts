import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api: string = 'http://localhost:3000/products';
  products: ProductModel[] = [];

  constructor(private _http: HttpClient) {}

  post(model: ProductModel, callBack: () => void) {
    this._http.post(this.api, model).subscribe((res) => callBack()); //Buradaki callBack in anlamı:
  } //işlem başarılı olur olmaz callBack fonksiyonu aktive edilir. Bu fonksiyonun görevi AddProductComponent te
  //bulunan form reset işlemini yaparak, input lardaki girdileri sıfırlar...

  getList(callBack: () => void) {
    this._http
      .get<ProductModel[]>(this.api)
      .subscribe((res) => ((this.products = res), callBack())); //Buradaki callBack in anlamı:
  } //gelen "res" ile products u doldurduktan sonra callBack fonksiyonunu aktif et. Bu sayede
} //asenkron süreçte yaşanabilecek herhangi bir sıkıntının önüne geçilmiş olur. Zaten HomeComponent te çağırılan
//callBack fonksiyonu, bu servisin "products" array ine erişip ürünleri HomeComponent e çekmekle görevlidir...
//Haliyle boş array i çekmenin hiçbir faydası olmayacağından dolayı asenkron sürece bu yöntemle riayet etmiş olduk...
