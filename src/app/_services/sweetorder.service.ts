import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SweetOrder } from '../SweetOrder';


@Injectable({
  providedIn: 'root'
})
export class SweetorderService {
  private baseUrl='http://localhost:8899/sweetorder';
  
  constructor(private http: HttpClient) 
  { }
  
  GetOrder(): Observable<SweetOrder[]> {
    console.log("here");
    return this.http.get<SweetOrder[]>(`${this.baseUrl}`).pipe(
      retry(1), catchError(this.handleError));
  }

  
  createorder(_sweetOrder: any): Observable<SweetOrder>
  {
    return this.http.post<SweetOrder>(this.baseUrl,_sweetOrder).pipe(
      retry(1), catchError(this.handleError));
    
  }
  
  getOrderById(id: number): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      retry(1), catchError(this.handleError));
  }

  // GetOrderById(id :number): Observable<Sweetorder> {
  //   return this.httpservice.get<Sweetorder>(`${this.orderurl}/${id}`)
  //   .pipe( retry(1), catchError(this.myerrorhandler))
  // }

  // // Error handling
  // myerrorhandler(error) {
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent) 
  //   {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else 
  //   {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }

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
