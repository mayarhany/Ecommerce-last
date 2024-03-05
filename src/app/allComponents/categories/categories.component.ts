import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit  {
  constructor(private _productS : ProductService){}

  categoriesArr:Category[] = [];

  ngOnInit(): void {
    this._productS.getAllCategories().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.categoriesArr = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
