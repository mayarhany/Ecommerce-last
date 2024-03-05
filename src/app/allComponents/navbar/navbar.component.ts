import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _router : Router, private _cartS : CartService, private _renderer2 : Renderer2, private _wishlistS : WishlistService){}
  numOfItems:number = 0;
  numOfFavsItems:number = 0;

  @ViewChild('nav') navEL!: ElementRef

  @HostListener('window:scroll')
  onScroll():void{
    if(scrollY > 150){
      this._renderer2.removeClass(this.navEL.nativeElement, 'py-3');
      this._renderer2.addClass(this.navEL.nativeElement, 'shadow');
    }
    else{
      this._renderer2.addClass(this.navEL.nativeElement, 'py-3');
      this._renderer2.removeClass(this.navEL.nativeElement, 'shadow');
    }
  }

  ngOnInit(): void {
    this._cartS.numOfItems.subscribe({
      next: (newNum) =>{
        // console.log(newNum);
        this.numOfItems = newNum;
      }
    })
    this._wishlistS.numOfFavs.subscribe({
      next: (newNum) =>{
        // console.log(newNum);
        this.numOfFavsItems = newNum;
      }
    })

    this._cartS.getUserCart().subscribe({
      next: (res) => {
        // console.log(res);
        this.numOfItems = res.numOfCartItems;
      }
    })
    this._wishlistS.getWishlist().subscribe({
      next: (res) => {
        // console.log(res);
        this.numOfFavsItems = res.count;
      }
    })
  }
  signout():void{
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
