import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/customer';
import { Customerservice } from 'src/app/_services/customerdata.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {

  constructor(private token: TokenStorageService,private customer:Customerservice,private router: Router) { }
  cust:customer=this.token.getUser();
  name:string=this.cust.username;
  isNum=true;
  isZip=true;
  // id1:number=this.id + 1;
  // cust1!: customer;

  ngOnInit(): void {
    console.log(this.name);
    this.customer.getCustomerbyName(this.name).subscribe((data: any) =>{
     // console.log(data);
      this.cust=data;
    },(error: any) => console.log(error));
  }

  updatedetails(){ 
   // console.log(this.cust+"above")
    this.customer.updateCustomer(this.cust).subscribe((data: any)=>{
      //console.log(data+" from update details");
        this.cust = new customer();
    }, (error: any) => console.log(error));
  }

  onSubmit() {
   this.isNum = /^\d+$/.test(this.cust.address.contactNo);
   this.isZip=/^\d+$/.test(this.cust.address.zip);
    if(this.isNum && this.isZip){
    this.updatedetails();
    this.gotoProfile();
    }
  }

  gotoProfile(){
    setTimeout(()=>{window.location.reload();},100);
    this.router.navigate(['/profile']);
  }

}
