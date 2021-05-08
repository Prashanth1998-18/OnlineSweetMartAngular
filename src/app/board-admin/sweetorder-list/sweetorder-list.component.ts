import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SweetOrder } from '../../SweetOrder';
import { SweetorderService } from '../../_services/sweetorder.service';

@Component({
  selector: 'app-sweetorder-list',
  templateUrl: './sweetorder-list.component.html',
  styleUrls: ['./sweetorder-list.component.css']
})
export class SweetorderListComponent implements OnInit {


  sweetorders!:SweetOrder[];
  searchValue!:string;

  constructor(private sweetorderservice :SweetorderService , private router: Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }
   
  reloadData()
  {
  this.sweetorderservice.GetOrder().subscribe((res: any[]) => {
    this.sweetorders=res;
  });
  }
  
  SweetOrderDetails(id: number){
    this.router.navigate(['admin/orderdetails', id]);
  }
  
}
