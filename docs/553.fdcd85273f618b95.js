"use strict";(self.webpackChunkEcommerce2=self.webpackChunkEcommerce2||[]).push([[553],{7553:(f,p,r)=>{r.r(p),r.d(p,{ProductsComponent:()=>I});var c=r(6814),g=r(1120),_=r(3461),h=r(6472),a=r(6787),l=r(95),t=r(4769),d=r(0),x=r(6286),C=r(2425),P=r(9196);function v(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"i",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,o=t.oxw(2);return t.KtG(o.addToWishList(i._id))}),t.qZA()}}function E(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"i",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,o=t.oxw(2);return t.KtG(o.removefromWishlist(i._id))}),t.qZA()}}function M(n,u){if(1&n&&t._UZ(0,"i",23),2&n){const e=u.$implicit,s=t.oxw().$implicit;t.ekj("rating-text",s.ratingsAverage>=e)}}const O=function(n){return["/productDetailes",n]},T=function(){return[1,2,3,4,5]};function A(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t.YNc(2,v,1,0,"i",10),t.YNc(3,E,1,0,"i",11),t.TgZ(4,"header",12),t._UZ(5,"img",13),t.ALo(6,"seeMore"),t.TgZ(7,"p",14),t._uU(8),t.qZA(),t.TgZ(9,"h2",15),t._uU(10),t.ALo(11,"seeMore"),t.qZA(),t.TgZ(12,"div",16)(13,"span"),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"span"),t.YNc(17,M,1,2,"i",17),t.TgZ(18,"span",18),t._uU(19),t.qZA()()()(),t.TgZ(20,"footer")(21,"button",19,20),t.NdJ("click",function(){const o=t.CHM(e).$implicit,m=t.MAs(22),Z=t.oxw(2);return t.KtG(Z.addProductToCart(o._id,m))}),t._uU(23,"+ Add To Cart"),t.qZA()()()()}if(2&n){const e=u.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!s.wishlistData.includes(e._id)),t.xp6(1),t.Q6J("ngIf",s.wishlistData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(20,O,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title)("title",t.xi3(6,11,e.title,5)),t.xp6(3),t.Oqu(e.category.name),t.xp6(2),t.Oqu(t.xi3(11,14,e.title,3)),t.xp6(4),t.Oqu(t.xi3(15,17,e.price," EGP")),t.xp6(3),t.Q6J("ngForOf",t.DdM(22,T)),t.xp6(2),t.Oqu(e.ratingsAverage)}}const D=function(n,u,e){return{id:"productPaginate",itemsPerPage:n,currentPage:u,totalItems:e}};function L(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"section",1)(1,"h2",2),t._uU(2,"All Products"),t.qZA(),t.TgZ(3,"input",3),t.NdJ("ngModelChange",function(i){t.CHM(e);const o=t.oxw();return t.KtG(o.term=i)}),t.qZA(),t.TgZ(4,"div",4),t.YNc(5,A,24,23,"div",5),t.ALo(6,"slice"),t.ALo(7,"search"),t.ALo(8,"paginate"),t.qZA(),t.TgZ(9,"div",6)(10,"pagination-controls",7),t.NdJ("pageChange",function(i){t.CHM(e);const o=t.oxw();return t.KtG(o.pageChanged(i))})("pageBoundsCorrection",function(i){t.CHM(e);const o=t.oxw();return t.KtG(o.pageChanged(i))}),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.term),t.xp6(2),t.Q6J("ngForOf",t.Dn7(6,6,t.xi3(7,10,t.xi3(8,13,e.allProducts,t.kEZ(16,D,e.pageSize,e.currentPage,e.total)),e.term),0,16)),t.xp6(5),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let I=(()=>{class n{constructor(e,s,i,o,m){this._productS=e,this._cartS=s,this._renderer2=i,this._toastr=o,this._wishlistS=m,this.allProducts=[],this.pageSize=0,this.currentPage=1,this.total=0,this.term="",this.wishlistData=[]}ngOnInit(){this._productS.getAllProducts().subscribe({next:e=>{this.allProducts=e.data,this.pageSize=e.metadata.limit,this.currentPage=e.metadata.currentPage,this.total=e.results},error:e=>{console.log(e)}}),this._wishlistS.getWishlist().subscribe({next:e=>{const s=e.data.map(i=>i._id);this.wishlistData=s}})}addProductToCart(e,s){this._renderer2.setAttribute(s,"disabled","true"),this._cartS.addToCart(e).subscribe({next:i=>{"success"===i.status&&(this._renderer2.removeAttribute(s,"disabled"),this._toastr.success(i.message),this._cartS.numOfItems.next(i.numOfCartItems))},error:i=>{this._renderer2.removeAttribute(s,"disabled"),console.log(i)}})}addToWishList(e){this._wishlistS.addToWishlist(e).subscribe({next:s=>{"success"===s.status&&(this._toastr.success(s.message),this.wishlistData=s.data,this._wishlistS.numOfFavs.next(this.wishlistData.length))},error:s=>{console.log(s)}})}removefromWishlist(e){this._wishlistS.removeFromWishlist(e).subscribe({next:s=>{"success"===s.status&&(this._toastr.success(s.message),this.wishlistData=s.data,this._wishlistS.numOfFavs.next(this.wishlistData.length))},error:s=>{"fail"===s.error.statusMsg&&(console.log(s),this._toastr.success(s.error.message))}})}pageChanged(e){this._productS.getAllProducts(e).subscribe({next:s=>{console.log(s),this.allProducts=s.data,this.pageSize=s.metadata.limit,this.currentPage=s.metadata.currentPage,this.total=s.results},error:s=>{console.log(s)}})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(d.M),t.Y36(x.N),t.Y36(t.Qsj),t.Y36(C._W),t.Y36(P.M))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-3",4,"ngIf"],[1,"py-3"],[1,"fw-light","mb-1"],["type","text","placeholder","Search...",1,"form-control","w-75","mx-auto","my-4",3,"ngModel","ngModelChange"],[1,"row","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3 g-4",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-5"],["id","productPaginate","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3","g-4"],[1,"product","cursor-pointer"],["class","fa-regular fa-heart text-gray fa-2xl heart-icon",3,"click",4,"ngIf"],["class","fa-solid fa-heart text-main fa-2xl heart-icon",3,"click",4,"ngIf"],[3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"text-main","fs-sm","my-1"],[1,"h6","fw-light"],[1,"fs-sm","d-flex","align-items-center","justify-content-between"],["class","fa fa-star fs-sm",3,"rating-text",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"main-btn","add-btn","w-100","my-2",3,"click"],["btnAdd",""],[1,"fa-regular","fa-heart","text-gray","fa-2xl","heart-icon",3,"click"],[1,"fa-solid","fa-heart","text-main","fa-2xl","heart-icon",3,"click"],[1,"fa","fa-star","fs-sm"]],template:function(s,i){1&s&&t.YNc(0,L,11,20,"section",0),2&s&&t.Q6J("ngIf",i.allProducts.length)},dependencies:[c.ez,c.sg,c.O5,c.OU,c.H9,g.rH,_.F,h.JX,h._s,h.LS,a.C,l.u5,l.Fj,l.JJ,l.On]})}return n})()},3461:(f,p,r)=>{r.d(p,{F:()=>g});var c=r(4769);let g=(()=>{class _{transform(a,l=5){return a.split(" ").slice(0,l).join(" ")}static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275pipe=c.Yjl({name:"seeMore",type:_,pure:!0,standalone:!0})}return _})()},6286:(f,p,r)=>{r.d(p,{N:()=>h});var c=r(5619),g=r(4769),_=r(9862);let h=(()=>{class a{constructor(t){this._httpClient=t,this.numOfItems=new c.X(0)}addToCart(t){return this._httpClient.post("/api/v1/cart",{productId:t})}getUserCart(){return this._httpClient.get("/api/v1/cart")}removeProduct(t){return this._httpClient.delete(`/api/v1/cart/${t}`)}updateCartQuantity(t,d){return this._httpClient.put(`/api/v1/cart/${t}`,{count:d})}clearCart(){return this._httpClient.delete("/api/v1/cart")}checkOut(t,d){return this._httpClient.post(`/api/v1/orders/checkout-session/${t}?url=http://localhost:4200`,{shippingAddress:d})}getUserOrders(){return this._httpClient.get("")}getAllusers(){return this._httpClient.get("/api/v1/users")}static#t=this.\u0275fac=function(d){return new(d||a)(g.LFG(_.eN))};static#e=this.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);