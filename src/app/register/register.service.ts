import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  register(body):Observable<string>
	{		
		return this.http.post<any>('http://localhost:8100/register', body);
	}
	
	constructor(private http: HttpClient) { }
	
}
