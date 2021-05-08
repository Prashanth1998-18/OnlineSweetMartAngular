import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../../customer';
import { Customerservice } from '../../_services/customerdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})

export class GetCustomersComponent implements OnInit {
 
  customerList!: customer[];
  searchValue!: string;

  ngOnInit()
  {
    this.reloadData();
  }

  reloadData()
  {
    this.customerservice.Getcustomer().subscribe(res => {
      this.customerList =res;
    })
  }
  constructor(private customerservice: Customerservice, private router: Router)
  {

  }

  // updateCustomer(id: number)
  // {
  //   this.router.navigate(['update', id]);
  // }
  getCustomerbyId(id: number)
  {
    this.router.navigate(['admin/customerdetails', id]);
  }
//  loadcustomer(){
//   return this.customerservice.Getcustomer().subscribe( (data: any) => {
//       this.customerList = data;
//   } )
//  }
 
//  onSubmit(){
//   console.log(this.registrationform.value);
//   alert(JSON.stringify(this.registrationform.value));
// }

}

