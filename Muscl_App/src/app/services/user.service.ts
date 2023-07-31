import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../model/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/users";

  constructor(private http:HttpClient) {}


  // all users
  public getAllUser() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  

}
