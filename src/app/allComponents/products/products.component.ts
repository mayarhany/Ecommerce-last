import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { SeeMorePipe } from 'src/app/core/pipes/see-more.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, SeeMorePipe, NgxPaginationModule, SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _productS : ProductService, private _cartS : CartService, private _renderer2 : Renderer2, private _toastr : ToastrService, private _wishlistS : WishlistService){}

  allProducts: Product[] = [];
  pageSize: number = 0;
  currentPage: number = 1;
  total: number = 0;
  term: string = '';
  wishlistData:string[] = [];

  ngOnInit(): void {
    this._productS.getAllProducts().subscribe({
      next: (res) => {
        // console.log(res);
        this.allProducts = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._wishlistS.getWishlist().subscribe({
      next: (res) => {
        // this.wishlistData = res.data;
        const newData = res.data.map((item:any) => item._id);
        this.wishlistData = newData;
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

  
  addToWishList(proId:string|undefined):void{
    this._wishlistS.addToWishlist(proId).subscribe({
      next: (res) => {
        if(res.status ==='success'){
          // console.log(res);          
          this._toastr.success(res.message);
          this.wishlistData = res.data;
          this._wishlistS.numOfFavs.next(this.wishlistData.length);
        }
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
  
  pageChanged(event:any):void{
    this._productS.getAllProducts(event).subscribe({
      next: (res) => {
        console.log(res);
        this.allProducts = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
