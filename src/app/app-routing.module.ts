import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/gaurds/auth.guard';

const routes: Routes = [
  {path: '', canActivate: [authGuard], loadComponent: () => import('./layouts/blank-layout/blank-layout.component').then((m)=> m.BlankLayoutComponent), 
children: [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./allComponents/home/home.component').then((m) => m.HomeComponent), title: 'Home'},
  {path: 'cart', loadComponent: () => import('./allComponents/carts/carts.component').then((m) => m.CartsComponent), title: 'Cart'},
  {path: 'brands', loadComponent: () => import('./allComponents/brands/brands.component').then((m) => m.BrandsComponent), title: 'Brands'},
  {path: 'products', loadComponent: () => import('./allComponents/products/products.component').then((m) => m.ProductsComponent), title: 'Products'},
  {path: 'categories', loadComponent: () => import('./allComponents/categories/categories.component').then((m) => m.CategoriesComponent), title: 'Categories'},
  {path: 'wishlist', loadComponent: () => import('./allComponents/wishlist/wishlist.component').then((m) => m.WishlistComponent), title: 'Wishlist'},
  {path: 'productDetailes/:id', loadComponent: () => import('./allComponents/product-detailes/product-detailes.component').then((m) => m.ProductDetailesComponent), title: 'ProductDetailes'},
  {path: 'categoryDetailes/:id', loadComponent: () => import('./allComponents/categorydetailes/categorydetailes.component').then((m) => m.CategorydetailesComponent), title: 'CategoryDetailes'},
  {path: 'payment/:id', loadComponent: () => import('./allComponents/paymant/paymant.component').then((m) => m.PaymantComponent), title: 'Payment'},
  {path: 'allorders', loadComponent: () => import('./allComponents/allorders/allorders.component').then((m) => m.AllordersComponent), title: 'allorders'}
]},

  {path: '', loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
  children: [
    {path:'' ,redirectTo: 'login', pathMatch:'full'},
    {path:'login', loadComponent: () => import('./allComponents/login/login.component').then((m) => m.LoginComponent),title:'Login'},
    {path:'register', loadComponent: () => import('./allComponents/register/register.component').then((m) => m.RegisterComponent),title:'Register'},
    {path: 'forgetPassword', loadComponent: () => import('./allComponents/forget-pass/forget-pass.component').then((m) => m.ForgetPassComponent), title:'forgetPassword'}
  ]},

  {path:'**', loadComponent: () => import('./allComponents/notfound/notfound.component').then((m)=> m.NotfoundComponent), title:'Notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
