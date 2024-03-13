import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private http: HttpClient) { }

  
  public getLecturerById(id: number): Observable<User> {
    return this.http.get<User>(`/api/lecturer/1`)
  }

  public getLecture(): Observable<User[]> {
    return this.http.get<User[]>(`/api/lecturer`)
  }
}
