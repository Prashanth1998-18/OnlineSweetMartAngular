import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../category';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl= 'http://localhost:8899/category';
  
  constructor(private http: HttpClient)
  {
  }

  updateCategory(category: Object) {
    return this.http.put(`${this.baseUrl}`, category).pipe(
      retry(1), catchError(this.handleError));
  }

  getCategory(id: number): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      retry(1), catchError(this.handleError));
  }

  createCategory(category: Object)
  {
    return this.http.post(this.baseUrl,category).pipe(
      retry(1), catchError(this.handleError));
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' }).pipe(
      retry(1), catchError(this.handleError));
  }

  getCategoryList(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}`).pipe(
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
