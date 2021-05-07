import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../app/_services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }
canActivate(): boolean{
  console.log(this.auth.loggedIn());
    if(this.auth.loggedIn())
    { 
      return true;
    }
    else{
      this.router.navigate(['404']);
      return false;
    }
}
  
}
