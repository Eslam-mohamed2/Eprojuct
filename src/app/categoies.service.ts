import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoiesService {
  baseURL: string = 'https://ecommerce.routemisr.com';
  
  constructor(private _HttpClient: HttpClient) { }

  getAllcateroies(): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/categories`);
  }
  
  getSpecificCategory(id:string): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/products?category[in]=${id}`);
  }
  
}
