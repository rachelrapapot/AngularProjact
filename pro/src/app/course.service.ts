import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  public getCourseFromServer(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/Course')
  }

public save(p: Course): Observable<any> {
    // this.products.push(p)
    return this.http.post('/api/Course', p)

  }
  
  public getCourseById(id: number): Observable<Course> {
  console.log(id) 
   console.log("666666666666666666666666")
    return this.http.get<Course>(`/api/Course/${id}`)
  }
  public DeleteById(id: number): Observable<Course> {
  
    return this.http.delete<Course>(`/api/Course/${id}`)
  }
  public PutCourse(id: number,p: Course): Observable<Course> {
    return this.http.put<Course>(`/api/Course/${id}`,p)
  }


}
