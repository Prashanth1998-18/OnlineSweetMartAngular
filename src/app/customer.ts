
import { Address } from "./Address";
import { Role } from "./Role";
import { SweetOrder } from "./SweetOrder";

export class customer{
    id!:number;
    username!:string;
    email!:string;
    address!:Address;
    sweetOrders!:SweetOrder[];
    roles!:Role[];
}