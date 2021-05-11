import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../../customer';
import { Customerservice } from '../../_services/customerdata.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent implements OnInit {

  id!: number;
  customer: customer | undefined;

  constructor(private route: ActivatedRoute,private router: Router,private customertService: Customerservice) { }

  ngOnInit(){
    this.customer=new customer();

    this.id=this.route.snapshot.params['id'];

    this.customertService.getCustomer(this.id)
      .subscribe((data: any) => {
        //console.log(data)
        this.customer = data;
      }, (error: any) => console.log(error));

  }

  list()
  {
    this.router.navigate(['admin/customers']);
  }
}
