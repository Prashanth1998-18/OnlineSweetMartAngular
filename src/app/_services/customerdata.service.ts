import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { customer } from '../customer';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class Customerservice {

  url:string = "http://localhost:8899/customer";
  

  constructor(private httpservice: HttpClient,private token: TokenStorageService) 
  {

   }
 
   Getcustomer(): Observable<customer[]>
    {
     return this.httpservice.get<customer[]>(this.url)
    
    }

    updateCustomer(customer: Object){
      console.log(customer);
      const headers = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      this.token.saveUser(customer);
      return this.httpservice.put(`${this.url}`, customer,{headers:headers});
    }
  
    getCustomer(id: number): Observable<Object>
    {
      return this.httpservice.get(`${this.url}/${id}`);
    }

    getCustomerbyName(name:string): Observable<Object>
    { 
        return this.httpservice.get(`${this.url}/name/${name}`);
    }

    createCustomer(customer: Object): Observable<Object> {
      return this.httpservice.post(`${this.url}`, customer);
    }
  }

