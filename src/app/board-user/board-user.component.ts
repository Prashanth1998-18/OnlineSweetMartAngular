import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  content?: string;

  constructor() { }

  ngOnInit(): void {
  }

 
}
