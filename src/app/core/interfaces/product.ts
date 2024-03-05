export interface Product {
    _id?:string,
    title:string,
    category: { name: string},
    price:number,
    ratingsAverage: number,
    imageCover: string
}
