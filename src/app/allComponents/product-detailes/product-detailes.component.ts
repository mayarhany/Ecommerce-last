import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SeeMorePipe } from 'src/app/core/pipes/see-more.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [CommonModule, CarouselModule, SeeMorePipe],
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {
  constructor(private _activatedRoute : ActivatedRoute, private _productS : ProductService, private _carts : CartService, private _toastr: ToastrService, private _renderer2 : Renderer2){}

  productDetailes:any = null;

  productId!:string;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (params: any) => {
        this.productId = params.get('id');
      }
    })

    this._productS.getSpecificProduct(this.productId).subscribe({
      next: (res) => {
        // console.log(res.data);
        this.productDetailes = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addProductToCart(id:any,el: HTMLButtonElement):void{
    this._renderer2.setAttribute(el, 'disabled', 'true');
    this._carts.addToCart(id).subscribe({
      next: (res) => {
        // console.log(res);
        this._toastr.success(res.message);
        this._renderer2.removeAttribute(el, 'disabled');
        this._carts.numOfItems.next(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
        this._renderer2.removeAttribute(el, 'disabled');
      }
    })
  }

  prodictImgsOptions: OwlOptions = { 
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
