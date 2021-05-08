import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl= 'http://localhost:8899/category';
  
  constructor(private http: HttpClient)
  {
  }

  updateCategory(category: Object) {
    return this.http.put(`${this.baseUrl}`, category);
  }

  getCategory(id: number): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategory(category: Object)
  {
    return this.http.post(this.baseUrl,category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategoryList(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

}
