import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import{LoginComponent} from '../../login/login.component'
@Injectable({
  providedIn: 'root'
})
export class CoachprofileService implements OnInit {

  constructor(private http:HttpClient, private login :LoginComponent) { }
  ngOnInit(): void {
  }
  
  
  ViewDetails(id:any):Observable<any>{
    let httparms = new HttpParams().set('id',id)
  return this.http.get('http://localhost:3000/coaches',{params:httparms}).pipe(tap(data=> console.log(data)));
  }
  

}
