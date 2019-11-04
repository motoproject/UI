import { Injectable } from '@angular/core';
import {  
    HttpInterceptor,
     HttpRequest,
     HttpResponse,
     HttpHandler,
     HttpEvent,
     HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError,  } from 'rxjs/operators';

@Injectable()
export class CustomHttp implements HttpInterceptor {
    constructor(){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{

        request = request.clone({
            headers: request.headers.set('Content-Type','application/json')
            .append('Authentication','bearer '+localStorage.getItem('tk'))
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                // console.log("\n-----event-----------"+JSON.stringify(event));
                return event;
            }),
            catchError((error)=> throwError( console.log("\n---error-------"+JSON.stringify(error)) )
                
            ),
        );
    }

}