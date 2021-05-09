import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetOrder } from 'src/app/SweetOrder';
import { SweetorderService } from 'src/app/_services/sweetorder.service';


@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewOrdersdetailComponent implements OnInit {
  orderId!:number;
  sweetorder!: SweetOrder ;
  constructor(
    private route:ActivatedRoute,
    private sweetorderservice : SweetorderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sweetorder=new SweetOrder();
    console.log("in order details");
    this.orderId=this.route.snapshot.params['id'];
    console.log(this.orderId +" from order id")
    this.sweetorderservice.getOrderById(this.orderId)
      .subscribe((data: any) => {
        console.log(data+"from order details")
        this.sweetorder = data;
      }, (error: any) => console.log(error));

  }
  list()
  {
    this.router.navigate(['/myorders']);
  }

  }
 
