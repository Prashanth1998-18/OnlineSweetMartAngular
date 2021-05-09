import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../customer';
import { Customerservice } from '../_services/customerdata.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  cust:customer=this.token.getUser();
  name:string=this.cust.username;
  constructor(private token: TokenStorageService,private customer:Customerservice,private router: Router) { }

  ngOnInit(): void {
    console.log(this.name);
    this.customer.getCustomerbyName(this.name).subscribe((data: any) =>{
      //console.log(data);
      this.cust=data;
    },(error: any) => console.log(error));
  }

  updatedetails(){
    this.router.navigate(["/userupdate"]);
  }

  orders(){
      this.router.navigate(["/myorders"]);
  }


}
