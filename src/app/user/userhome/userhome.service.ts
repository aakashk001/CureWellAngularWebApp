import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {

  constructor(private http:HttpClient) { }

  allcoaches():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/coaches').pipe(tap(data=> console.log(data)))
  }
}
