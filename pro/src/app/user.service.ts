import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public getUserFromServer(): Observable<User[]> {
    return this.http.get<User[]>('/api/User')
  }

public save(p: User): Observable<any> {
    // this.products.push(p)
    return this.http.post('/api/User', p)

  }


}
