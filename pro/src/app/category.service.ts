import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  public getCategoryFromServer(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/Category')
  }


  
  public getCategoryById(id: number): Observable<Category> {
    console.log(this.http.get<Category>(`/api/Category/${id}`)+"kyuiou")
    return this.http.get<Category>(`/api/Category/${id}`)
    
  }
}
