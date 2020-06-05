import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
	
	login(body):Observable<boolean>
	{
		
		return this.http.post<any>('http://localhost:8100/login', body)
	}
	

  constructor(private http: HttpClient) { }
}
