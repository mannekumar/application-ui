import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }
  viewproductid(param):Observable<[]>
	{		
    return this.http.get<any>('http://localhost:8300/'+param+'/details');
  }}
