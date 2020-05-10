import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private global: GlobalService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // We retrieve the token, if any
        const token = this.global.token;
        let newHeaders = req.headers;
        if (token) {
            // If we have a token, we append it to our new headers
            //newHeaders = newHeaders.append('Authorization', 'Bearer ' + token);
        }
        // Finally we have to clone our request with our new headers
        // This is required because HttpRequests are immutable
        const authReq = req.clone({ headers: newHeaders });
        // Then we return an Observable that will run the request
        // or pass it to the next interceptor if any
        return next.handle(authReq);
    }
}