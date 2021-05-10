import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { customer } from '../customer';
import { TokenStorageService } from './token-storage.service';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


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
     return this.httpservice.get<customer[]>(this.url).pipe(
      retry(1), catchError(this.handleError));
    
    }

    updateCustomer(customer: Object){
      console.log(customer);
      const headers = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      this.token.saveUser(customer);
      return this.httpservice.put(`${this.url}`, customer,{headers:headers}).pipe(
        retry(1), catchError(this.handleError));
    }
  
    getCustomer(id: number): Observable<Object>
    {
      return this.httpservice.get(`${this.url}/${id}`).pipe(
        retry(1), catchError(this.handleError));
    }

    getCustomerbyName(name:string): Observable<Object>
    { 
        return this.httpservice.get(`${this.url}/name/${name}`).pipe(
          retry(1), catchError(this.handleError));
    }

    createCustomer(customer: Object): Observable<Object> {
      return this.httpservice.post(`${this.url}`, customer).pipe(
        retry(1), catchError(this.handleError));
    }


    private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }

