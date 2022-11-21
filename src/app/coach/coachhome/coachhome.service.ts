import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachhomeService {

  constructor(private http:HttpClient) { }

  schedules():Observable<any>{
   return this.http.get<any>('http://localhost:3000/bookings').pipe(tap(data => console.log(data)));
  }
}

