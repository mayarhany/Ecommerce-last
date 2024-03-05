import { SeeMorePipe } from 'src/app/core/pipes/see-more.pipe';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { Category } from 'src/app/core/interfaces/category';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SeeMorePipe, CarouselModule, RouterLink, SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _productS: ProductService,
    private _cartS: CartService,
    private _toastr: ToastrService,
    private _renderer2: Renderer2,
    private _wishlistS : WishlistService
  ) {}

  allProducts: Product[] = [];
  allCategories: Category[] = [];
  term: string = '';
  wishlistData:string[] = [];

  ngOnInit(): void {
    this._productS.getAllProducts().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.allProducts = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this._productS.getAllCategories().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.allCategories = res.data;
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
          console.log(res);
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

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  imagesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
}
