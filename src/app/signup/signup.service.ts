import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient ) { }

  register(user:any,role:string):Observable<any>{
    let httparms = new HttpParams().set('role',role)
    const options  = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`http://localhost:3000/${role}`,user,{headers:options,params:httparms}).pipe(tap((val)=> console.log(val)),catchError(this.handleError))
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
