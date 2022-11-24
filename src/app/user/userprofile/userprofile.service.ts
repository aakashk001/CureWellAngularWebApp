import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient) { }
viewDetails(id:any){
  return this.http.get<any>(`http://localhost:3000/users/${id}`).pipe(tap(data=> console.log(data)))
}
}
