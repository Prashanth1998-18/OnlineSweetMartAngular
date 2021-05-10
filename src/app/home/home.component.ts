import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit{
  showNavigationArrows = true;
  showNavigationIndicators = true;
  //images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig,private token: TokenStorageService,private router: Router) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {
  }

  navigateToLogin(){
   if(this.token.getToken!=null){
     this.router.navigate(['products']);
   }
   else{
     this.router.navigate(['login']);
   }
  }

}
