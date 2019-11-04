import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders,} from '@angular/common/http';

import {saveAs} from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor( private _http:HttpClient) { }

  private header = new HttpHeaders().set('Content-Type', 'multipart/form-data;boundary="boundary'); //.append('Accept', "multipart/form-data");

single(data){
  console.log(data);
  
  let res = this.xhrSingle(data);

  // let url = "http://localhost:7000/fs/file";
  // return this._http.post(url,this.header,data).pipe(map(res=>res));
}

xhrSingle(data){
  let xhr = null;
  xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:7000/fs/file", true);
  xhr.onload = function (){
    if(this['status'] === 200){
      let responseText = this['responseText'];
      let files = JSON.parse(responseText);
      console.log(files);
      
    }else{
      let responseText = this['responseText'];
      let files = JSON.stringify(responseText);
      console.log(files);

    }
  };
  xhr.send(data);
}

DownloadSingleFile(){
  // return this._http.get('http://localhost:7000/fs/downloadFile',data).pipe(map(res=>res));

  let xhr = null;
  xhr = new XMLHttpRequest();
  xhr.open('GET', "http://localhost:7000/fs/downloadFile", true);
  xhr.setRequestHeader('Content-Type','application/json');
  
  xhr.responseType = 'blob';

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      let blob = new Blob([this.response], {type: 'application/pdf'});
      saveAs(blob);
    }
  }
  xhr.send(null);

}

multiple(data):Observable<any>{
  let url = "http://localhost:7000/fs/multipleFiles";
  return this._http.post(url,data).pipe( map(res=>res));
}

}


