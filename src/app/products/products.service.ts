import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import {saveAs} from 'file-saver';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ProductsService {

  constructor(private _http:HttpClient) { }


  getAll(id):Observable<any>{
    let url = "http://localhost:7000/products/paging/"+id;
    return this._http.get(url).pipe(map(res=>res));
  }


  generateExcel():Observable<any>{
    let url = "http://localhost:7000/fs/jsontoexcel";
    return this._http.get(url).pipe(map(res=>res));
  }

  downloadExcel(filename):Observable<any>{
    let url = "http://localhost:7000/fs/downladExcel/"+filename;
    return this._http.get(url, { responseType: 'blob'}).pipe(map(res=>res));
  }

}
