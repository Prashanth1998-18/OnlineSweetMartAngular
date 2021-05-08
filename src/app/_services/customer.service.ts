import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { customer } from '../customer';

@Injectable({
  providedIn: 'root'
})



export class CustomerService {
  getCustomersUrl: string = 'http://localhost:8899/customer'

  constructor(private http:HttpClient) { }

  GetCustomers(): Observable<customer>{
    return this.http.get<customer>(this.getCustomersUrl)
    .pipe(retry(1), catchError(this.myerrorhandler))
  }

   // Error handling
   myerrorhandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
