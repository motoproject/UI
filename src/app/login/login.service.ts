import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private header = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http:HttpClient) { }

  login(loginDetails):Observable<any> {

    let url="http://localhost:7000/user/auth/login";
    console.log("\n---url--------"+ JSON.stringify(url));
    return this.http.post(url,loginDetails).pipe( map(res=>res) );
  }

  signUp(signupDetails):Observable<any>{
    let url="http://localhost:7000/user/auth/register";
    return this.http.post(url, signupDetails).pipe( map(res=>res));
  }


}
