import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://localhost:8899/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  constructor(private http: HttpClient,private token: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, city: string, contactNo: string, zip :string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      city,
      contactNo,
      zip,
    }, httpOptions);
  }

  // For adding new customer
  data: Object | undefined;
 
  //Http Post User
  RegisterNewUser(body:any): any{
    console.log("inside RegisterNewUser() of RegistrationService");
    const headers = { 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    this.http.post<any>(AUTH_API+'signup',body,{'headers':headers})
    .subscribe((data: Object | undefined) => {
      this.data = data;
      //this.loading = false;
    });
  }

  loggedIn():boolean{
    return sessionStorage.getItem('auth-token')!=null;
  }
}

