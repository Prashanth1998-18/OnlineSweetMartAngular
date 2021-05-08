import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/customer';
import { CustomerService } from 'src/app/_services/customer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  Customerslist: customer[] = [];
  constructor(private customerserv: CustomerService){}

ngOnInit(){
  this.loadCustomer();
}

loadCustomer(){
  
}
    
}
