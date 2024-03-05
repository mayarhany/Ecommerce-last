import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-categorydetailes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetailes.component.html',
  styleUrls: ['./categorydetailes.component.scss']
})
export class CategorydetailesComponent implements OnInit {
  constructor(private _productS : ProductService, private _activatedRoute : ActivatedRoute){}

  categoryId:string|null = '';
  categoryDetailesArr:Category = {
    name: '',
    image: ''
  };

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (params) =>{
        this.categoryId = params.get('id');
      }
    })

    this._productS.getSpecificCategory(this.categoryId).subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoryDetailesArr = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
