import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuHeaderService {

  constructor(private http:HttpClient) { }

  menu():Observable<any>{
    let url ="http://localhost:7000/user/auth/menu";
    return this.http.get(url).pipe(map(res=>res));
  }
}
