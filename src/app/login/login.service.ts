import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private http:HttpClient) { }


  login(users:any, id:any):Observable<any>{
    let httparms2 = new HttpParams().set('id',id)
    return this.http.get<any>(`http://localhost:3000/${users}`,{params:httparms2}).pipe(tap(data=>console.log(data))) 
  }
}
