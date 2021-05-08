import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetOrder } from '../../SweetOrder';
import { SweetorderService } from '../../_services/sweetorder.service';
@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
  id!:number;
  sweetorder!: SweetOrder ;
  constructor(
    private route:ActivatedRoute,
    private sweetorderservice : SweetorderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sweetorder=new SweetOrder();

    this.id=this.route.snapshot.params['id'];

    this.sweetorderservice.getOrderById(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.sweetorder = data;
      }, (error: any) => console.log(error));

  }
  list()
  {
    this.router.navigate(['admin/sweetorder']);
  }

  }
 
