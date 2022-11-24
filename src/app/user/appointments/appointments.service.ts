import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http:HttpClient) {


   }
appointment(id:any):Observable<any>{
let parms = new HttpParams().set("userId",id);
return this.http.get<any>('http://localhost:3000/bookings',{params:parms}).pipe(
  tap(value=> console.log(value))
)
}
}
