import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient) { }

  viewaddress(param):Observable<[]>
	{		
		return this.http.get<any>('http://localhost:8200/'+param+'/address');
  }
  
  updateaddress(body):Observable<[]>
	{		
		return this.http.post<any>('http://localhost:8200/'+body['email']+'/address/'+body['address_id']+'/modify',body);
  }
  deleteaddress(body):Observable<[]>
	{		
		return this.http.get<any>('http://localhost:8200/'+body['email']+'/address/'+body['address_id']+'/delete');
  }
  newaddress(body):Observable<[]>
	{		
		return this.http.post<any>('http://localhost:8200/'+body['email']+'/address/add',body);
	}
	
	
}
