import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

//https://github.com/bezkoder/angular-11-spring-boot-jwt-authentication#:~:text=Angular%2011%20Spring%20Boot%20JWT%20Authentication%20example,-It%20will%20be&text=The%20system%20is%20secured%20by,UI%20screenshots%20of%20our%20system.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
showUserBoard=false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard=this.roles.includes('ROLE_CUSTOMER');

      this.username = user.username;
    }
  }

  logout(): void {
    var cfrm=confirm("Do you want to LOGOUT");
    if(cfrm){
    this.tokenStorageService.signOut();
    window.location.reload();
    }
  }
}
