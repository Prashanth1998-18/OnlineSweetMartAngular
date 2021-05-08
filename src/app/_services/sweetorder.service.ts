import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<SweetOrder[]>(`${this.baseUrl}`);
  }

  
  createorder(_sweetOrder: any): Observable<SweetOrder>
  {
    return this.http.post<SweetOrder>(this.baseUrl,_sweetOrder);
    
  }
  
  getOrderById(id: number): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
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

}
