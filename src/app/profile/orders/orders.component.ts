import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/customer';
import { Customerservice } from 'src/app/_services/customerdata.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

//   Customerslist: customer[] = [];
//   constructor(private customerserv: CustomerService){}

// ngOnInit(){
//   this.loadCustomer();
// }

constructor(private token: TokenStorageService,private customer:Customerservice,private router: Router) { }
  cust:customer=this.token.getUser();
  name:string=this.cust.username;
  searchValue!:string;
 
  // id1:number=this.id + 1;
  // cust1!: customer;

  ngOnInit(): void {
    console.log(this.name);
    this.customer.getCustomerbyName(this.name).subscribe((data: any) =>{
      console.log(data);
      this.cust=data;
    },(error: any) => console.log(error));
  }

  SweetOrderDetails(id: number){
    this.router.navigate(['/orders', id]);
  }
    
}
