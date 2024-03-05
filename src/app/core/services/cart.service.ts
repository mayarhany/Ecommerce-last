import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _httpClient : HttpClient) { }

  numOfItems:BehaviorSubject<number> = new BehaviorSubject(0);

  addToCart(id: string):Observable<any>{
    return this._httpClient.post('/api/v1/cart', 
    {
      productId: id
    })
  }

  getUserCart():Observable<any>{
    return this._httpClient.get('/api/v1/cart');
  }

  removeProduct(id: string):Observable<any>{
    return this._httpClient.delete(`/api/v1/cart/${id}`);
  }

  updateCartQuantity(id: string, count: number):Observable<any>{
    return this._httpClient.put(`/api/v1/cart/${id}`, {
      count: count
    });
  }

  clearCart():Observable<any>{
    return this._httpClient.delete(`/api/v1/cart`);
  }

  checkOut(id: string, cartInfo: object):Observable<any>{
    return this._httpClient.post(`/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`, {shippingAddress: cartInfo});
  }

  getUserOrders():Observable<any>{
    return this._httpClient.get('');
  }

  getAllusers():Observable<any>{
    return this._httpClient.get('/api/v1/users');
  }
}
