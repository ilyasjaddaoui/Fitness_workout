import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) { }

  public register(newUser:any){

    return this.http.post(`${baseUrl}/register`, newUser, {responseType: 'text'}); // add {responseType: 'text'} for [ Http failure during parsing (ERROR) ]
  }
}
