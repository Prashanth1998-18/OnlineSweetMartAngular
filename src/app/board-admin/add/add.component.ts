import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../../customer';
import { Customerservice } from '../../_services/customerdata.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form:any={
    userId:null,
    username:null,
    email:null,
    city:null,
    contactNo:null,
    zip:null
  }
  customer: customer = new customer();
  submitted=false;

  constructor(private customerService: Customerservice, private router: Router) { }

  ngOnInit(): void {
  }

  newCustomer(): void{
    this.submitted=false;
    this.customer=new customer();
  }

  save()
  {
    this.customerService.createCustomer(this.customer).subscribe((data: any) => {
      console.log(data) 
      this.customer=new customer();
      this.gotoList();
    },
      (error: any) => console.log(error)
    );
  }


  onSubmit() {
    const {userId,username,email,city,zip,contactNo}=this.form;
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/customer']);
  }

}
