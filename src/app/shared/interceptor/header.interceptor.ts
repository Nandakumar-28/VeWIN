import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";

// Rxjs
import { Observable } from "rxjs";

// environment
import { environment } from "../../../environments/environment";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept( request: HttpRequest<unknown>, next: HttpHandler ): Observable<HttpEvent<unknown>> {

    if (request.url.indexOf(environment.apiUrl) != -1) {
      request = request.clone({
        headers: request.headers.set("ngrok-skip-browser-warning", "69420"),
      });
    }

    return next.handle(request);
  }
}
