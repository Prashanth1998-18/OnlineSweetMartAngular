import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { customer } from '../customer';
import { Product } from '../Product';
import { SweetOrder } from '../SweetOrder';
import { Customerservice } from '../_services/customerdata.service';
import { TokenStorageService } from '../_services/token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient,private token: TokenStorageService,private customer:Customerservice) { }

  private pathUrl='http://localhost:8899/sweetorder';
// cust:customer=this.token.getUser();
//   name:string=this.cust.username;
  createSweetOrder(customer:customer,prodList:Product[]):Observable<any>{
// console.log(order);
    return this.http.post<SweetOrder>(this.pathUrl,{customer,prodList},httpOptions).pipe(
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
