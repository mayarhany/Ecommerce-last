import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-paymant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './paymant.component.html',
  styleUrls: ['./paymant.component.scss']
})
export class PaymantComponent implements OnInit {
  constructor(private _activatedRoute : ActivatedRoute, private _cartS : CartService){}

  cartId:any = '';
  statusMsg: string = '';

  shippingAddressForm:FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl('')
  })

  handelPayment():void{
    const orderData = this.shippingAddressForm.value;

    this._cartS.checkOut(this.cartId, orderData).subscribe({
      next: (res) =>{
        if(res.status === 'success'){
          open(res.session.url, '_self')
        }
      },
      error: (err) => {
        console.log(err);
        this.statusMsg = err.error.statusMsg;
      }
    })
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id');
      }
    })
  }
}
