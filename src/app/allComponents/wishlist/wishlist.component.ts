import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { SeeMorePipe } from 'src/app/core/pipes/see-more.pipe';
import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, SeeMorePipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private _wishlistS : WishlistService, private _renderer2 : Renderer2, private _cartS : CartService, private _toastr : ToastrService){}
  wishlistArr: Product[] = [];
  wishlistData:string[] = [];


  ngOnInit(): void {
    this._wishlistS.getWishlist().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.wishlistArr = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  removefromWishlist(proId: string|undefined):void{
    this._wishlistS.removeFromWishlist(proId).subscribe({
      next: (res) => {
        if(res.status === 'success'){
          // console.log(res);
          this._toastr.success(res.message);
          this.wishlistData = res.data;
          this._wishlistS.numOfFavs.next(this.wishlistData.length);

          const newFavs = this.wishlistArr.filter((item:any) => this.wishlistData.includes(item._id));
          this.wishlistArr = newFavs; 
        }
      },
      error: (err) => {
        if(err.error.statusMsg === 'fail'){
          console.log(err); 
          this._toastr.success(err.error.message);         
        }
      }
    })
  }

  addProductToCart(id: any, element: HTMLButtonElement): void {
    this._renderer2.setAttribute(element, 'disabled', 'true');

    this._cartS.addToCart(id).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this._renderer2.removeAttribute(element, 'disabled');
          // console.log(res);
          this._toastr.success(res.message);
          this._cartS.numOfItems.next(res.numOfCartItems);
        }
      },
      error: (err) => {
        this._renderer2.removeAttribute(element, 'disabled');
        console.log(err);
      },
    });
  }
}
