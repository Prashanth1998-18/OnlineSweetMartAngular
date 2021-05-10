import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { Product } from '../Product';
import { SweetorderService } from '../_services/sweetorder.service';
import { SweetOrder } from '../SweetOrder';
import { CartService } from './cart.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Customerservice } from '../_services/customerdata.service';
//import { window } from 'rxjs/operators';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //prodList=window.sessionStorage.getItem('cart')
  constructor(private cart:CartService,private sweetService:SweetorderService,private token: TokenStorageService,private customer:Customerservice) { 
    console.log(window.sessionStorage.getItem('cart'));
      
    // this.add(this.prodList);
  }
  cust:customer=this.token.getUser();
  name:string=this.cust.username;
  cust1:customer;
  totalcartvalue:number=0;
  order!:any;
  order2!:any;
  prodList2:Product[]=[];
  prodList:any;
  orderId:number=1;
  ngOnInit(): void { 
     this.customer.getCustomerbyName(this.name).subscribe((data: any) =>{
      console.log(data);
      this.cust1=data;
    },(error: any) => console.log(error));
   
    this.prodList=JSON.parse(window.sessionStorage.getItem('cart'));
     for(var i=0;i<this.prodList.length;i++)
    { 
        var obj=this.prodList[i];
        console.log(obj.prodPrice);
        this.totalcartvalue+=obj.prodPrice;
    }
    console.log(this.totalcartvalue);
    //console.log(this.prodList2);
  }
  //prodList:window.sessionStorage.getItem('cart');
    
  
  placeOrder(){
    this.cart.createSweetOrder(this.cust1,this.prodList).subscribe((data:any)=>{
      console.log(data);
    });
  //  console.log(this.prodList);
  //  console.log(this.prodList2);
  //   this.order={
  //     "orderId":1,
  //     "customer":{"id":this.cust1.id},
  //      "prodList":{...this.prodList}
  // };

    //console.log(this.order);
    // setTimeout(()=>{},1000);
      
    
  }

  // total: number;
  // prod:Product;
  // add(prodList){
  //   this.prod=prodList 
  // for(let j=0;j<prodList.length;j++){  
  //      this.total+= this.prod[j].prodPrice  
  //      } 
  // }
  // removeFromCart(prod:Product){
  //   this.prodList.filter((product:Product)=>{
  //     if(product.prodId!=prod.prodId){
  //         product;
  //     }
  //   }
  // }


}
