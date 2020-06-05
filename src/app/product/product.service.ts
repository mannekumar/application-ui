import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  viewproducts():Observable<[]>
	{		
    return this.http.get<any>('http://localhost:8300/deals');
  }
  searchproduct(param):Observable<[]>
	{		
    return this.http.get<any>('http://localhost:8300/searchproduct/'+param);
  }
}
