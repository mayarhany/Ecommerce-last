import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _httpClient : HttpClient) { }
  numOfFavs:BehaviorSubject<number> = new BehaviorSubject(0);

  addToWishlist(productId:string|undefined):Observable<any>{
    return this._httpClient.post('/api/v1/wishlist',{
      productId: productId
    });
  }

  getWishlist():Observable<any>{
    return this._httpClient.get('/api/v1/wishlist');
  }

  removeFromWishlist(productId: string|undefined):Observable<any>{
    return this._httpClient.delete(`/api/v1/wishlist/${productId}`);
  }
}
