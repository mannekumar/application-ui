import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }

  newcard(body):Observable<[]>
	{		
		return this.http.post<any>('http://localhost:8400/'+body['email']+'/card/add',body);
  }
  
  viewcards(param):Observable<[]>
	{		
		return this.http.get<any>('http://localhost:8400/'+param+'/cards');
  }

  deletecard(body):Observable<[]>
	{		
		return this.http.get<any>('http://localhost:8400/'+body['email']+'/card/'+body['card_number']+'/delete');
  }
  

}
