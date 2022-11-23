import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {

  constructor(private http:HttpClient) { }

  allcoaches():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/coaches').pipe(tap(data=> console.log(data)))
  }

  confirmAppointment(bookingDetails:any){
    const option = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/bookings',bookingDetails,{headers:option}).pipe(tap(value => console.log(value)),catchError(this.handleError))
  }

  private handleError(err:HttpErrorResponse):Observable<any>{
    let errMsg= '';
    if(err.error instanceof Error){
      console.log('An error occured', err.error.message);
      errMsg = err.error.message;
    }
    else{
      console.log(`Backend returened code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(()=>errMsg);
  }
}
