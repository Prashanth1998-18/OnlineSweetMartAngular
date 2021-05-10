import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../board-user/customer.service';
import { customer } from '../customer';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent{
  // content?: string;

  // constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.getAdminBoard().subscribe(
  //     data => {
  //       this.content = data;
  //     },
  //     // err => {
  //     //   this.content = JSON.parse(err.error).message;
  //     // }
  //   );
  // }

  Customerslist!:customer[];
  constructor(private customerserv: CustomerService){}


    loadCustomers(){
      return this.customerserv.GetCustomers().subscribe( (data: any) => {
        this.Customerslist = data;
     } )
    }
}
