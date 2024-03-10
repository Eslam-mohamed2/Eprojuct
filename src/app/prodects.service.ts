import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdectsService {
  // variables
  baseURL: string = 'https://ecommerce.routemisr.com'
  
  //Constructor
  constructor(private _HttpClient: HttpClient) {}

  // APT Data
  getAllProdects(): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/products`)
  }
  getSpecificProdect(id:string): Observable <any > {
    return this._HttpClient.get(`${this.baseURL}/api/v1/products/${id}`)
  }
}
