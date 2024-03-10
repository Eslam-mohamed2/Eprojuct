import { getLocaleTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";


interface registerDataInterface{
  name?: string,
  email?: string,
  password?: string,
  rePassword?: string,
  phone?: string
  resetCode?: string;
  newPassword?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = 'https://ecommerce.routemisr.com'
  userDataVar: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient) { }

  registerAPI(registerData: registerDataInterface):Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signup`, registerData);
  }

  loginAPI(loginData: registerDataInterface): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signin`, loginData)
  }
  
  forgetPasswordAPI(clientEamil: registerDataInterface): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/forgotPasswords`, clientEamil)
  }
  
  verifyResetCodeAPI(clientCode: registerDataInterface): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/verifyResetCode`,clientCode)
  }
  
  resetCodeAPI(newClientData: registerDataInterface): Observable<any> {
    return this._HttpClient.put(`${this.baseURL}/api/v1/auth/resetPassword`, newClientData)
  }

  dataSaving() {
    if (localStorage.getItem('userToken') != null) {
      this.userDataVar.next(localStorage.getItem('userToken'));
      // console.log(this.userDataVar.value);
      this.userDataVar.next(jwtDecode(this.userDataVar.getValue()));  
    } else {
      this.userDataVar.next(null)
    }
  }
}
