import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http : HttpClient) { }

  // current user : (ADMIN OR USER)
  public getCurrentUser(){
    return this.http.get(baseUrl+"/user");
  }

  // generate token
  public generateToken(loginData:any){
  return this.http.post(`${baseUrl}/login`, loginData);

  }

  // set token in localStorage
  public loginUser(token:any){
    localStorage.setItem("token", token);
    return true;
  }

  // isLoggin : user is logged or not
  public isLoggin(){
    let tokenStr = localStorage.getItem("token")
    if(tokenStr == undefined || tokenStr == '' || tokenStr==null){
      return false;
    } else{
      return true;
    }
  }

  // logout : remove token from localStorage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  public clear(){
    localStorage.clear();
  }
  // get token
  public getToken(){
    return localStorage.getItem("token");
  }

  // set userDetail
  public setUser(user:any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  // get User
  public getUser(){
    let userStr= localStorage.getItem("user")
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // get userRole
  public getUserRole(){
    let user = this.getUser()
    return user.authorities[0].authority;
  }

}
