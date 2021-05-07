import { Product } from "./Product";

export class SweetOrder{
    orderId!:number;
    totalCost!:number;
    date!:Date;
    prodList!: Product[];
}