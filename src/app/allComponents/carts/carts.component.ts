import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { SeeMorePipe } from 'src/app/core/pipes/see-more.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule, SeeMorePipe, RouterLink, RouterLink],
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  constructor(private _cartS : CartService, private _renderer2 : Renderer2){}

  cartDetailes: any = null;

  ngOnInit(): void {
    this._cartS.getUserCart().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.cartDetailes = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteProduct(id: string):void{
    this._cartS.removeProduct(id).subscribe({
      next: (res) => {
        // console.log(res.data);
        this.cartDetailes = res.data;
        this._cartS.numOfItems.next(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  changeCount(id: string, count: number, element1:HTMLButtonElement, element2:HTMLButtonElement):void{
    if(count >= 1){
      this._renderer2.setAttribute(element1, 'disabled', 'true');
      this._renderer2.setAttribute(element2, 'disabled', 'true');

      this._cartS.updateCartQuantity(id, count).subscribe({
        next: (res) => {
          // console.log(res.data);
          this.cartDetailes = res.data;
          this._renderer2.removeAttribute(element1, 'disabled');
          this._renderer2.removeAttribute(element2, 'disabled');
        },
        error: (err) => {
          console.log(err);
          this._renderer2.removeAttribute(element1, 'disabled');
          this._renderer2.removeAttribute(element2, 'disabled');
        }
      })
    }
  }

  clearCart():void{
    this._cartS.clearCart().subscribe({
      next: (res) => {
        if(res.message === 'success'){
          // console.log(res);
          this.cartDetailes = null
          this._cartS.numOfItems.next(0);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
