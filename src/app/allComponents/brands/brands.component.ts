import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _productS : ProductService){}
  brandsArr:any = {};

  ngOnInit(): void {
    this._productS.getAllBrands().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.brandsArr = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
