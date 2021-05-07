import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { UserService } from '../_services/user.service';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      (      data: string | undefined) => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

 
}
