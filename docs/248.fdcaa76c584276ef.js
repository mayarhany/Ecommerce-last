"use strict";(self.webpackChunkEcommerce2=self.webpackChunkEcommerce2||[]).push([[248],{2248:(g,n,a)=>{a.r(n),a.d(n,{CategorydetailesComponent:()=>r});var c=a(6814),t=a(4769),l=a(0),i=a(1120);function d(o,u){if(1&o&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5)(5,"h4",6),t._uU(6),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("src",e.categoryDetailesArr.image,t.LSH)("alt",e.categoryDetailesArr.name),t.xp6(3),t.Oqu(e.categoryDetailesArr.name)}}let r=(()=>{class o{constructor(e,s){this._productS=e,this._activatedRoute=s,this.categoryId="",this.categoryDetailesArr={name:"",image:""}}ngOnInit(){this._activatedRoute.paramMap.subscribe({next:e=>{this.categoryId=e.get("id")}}),this._productS.getSpecificCategory(this.categoryId).subscribe({next:e=>{console.log(e.data),this.categoryDetailesArr=e.data},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(l.M),t.Y36(i.gz))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categorydetailes"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","my-5 w-75 mx-auto shadow rounded-2 bg-main-light",4,"ngIf"],[1,"my-5","w-75","mx-auto","shadow","rounded-2","bg-main-light"],[1,"row","align-items-center","p-3"],[1,"col-md-3"],[1,"w-100","rounded-2",3,"src","alt"],[1,"col-md-9"],[1,"fw-light"]],template:function(s,_){1&s&&t.YNc(0,d,7,3,"section",0),2&s&&t.Q6J("ngIf",_.categoryDetailesArr._id)},dependencies:[c.ez,c.O5]})}return o})()},0:(g,n,a)=>{a.d(n,{M:()=>l});var c=a(4769),t=a(9862);let l=(()=>{class i{constructor(r){this._httpClient=r}getAllProducts(r=1){return this._httpClient.get(`/api/v1/products?page=${r}`)}getAllCategories(){return this._httpClient.get("/api/v1/categories")}getSpecificProduct(r){return this._httpClient.get(`/api/v1/products/${r}`)}getSpecificCategory(r){return this._httpClient.get(`/api/v1/categories/${r}`)}getAllBrands(){return this._httpClient.get("/api/v1/brands")}static#t=this.\u0275fac=function(o){return new(o||i)(c.LFG(t.eN))};static#e=this.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);