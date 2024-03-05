import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient : HttpClient) { }

  getAllProducts(page: number = 1):Observable<any>{
    return this._httpClient.get(`/api/v1/products?page=${page}`);
  }
  getAllCategories():Observable<any>{
    return this._httpClient.get('/api/v1/categories');
  }
  getSpecificProduct(productId:string):Observable<any>{
    return this._httpClient.get(`/api/v1/products/${productId}`);
  }

  getSpecificCategory(categoryId:string|null):Observable<any>{
    return this._httpClient.get(`/api/v1/categories/${categoryId}`);
  }

  getAllBrands():Observable<any>{
    return this._httpClient.get(`/api/v1/brands`);
  }
}
