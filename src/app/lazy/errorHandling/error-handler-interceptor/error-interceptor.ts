import { Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { HttpInterceptor } from "@angular/common/http";
import { HttpEvent,HttpRequest,HttpHandler,HttpErrorResponse } from "@angular/common/http";
import { catchError,Observable, throwError } from "rxjs";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
            alert("Impossibile raggiungere il server");
            this.router.navigateByUrl(`/error`);
        }
         throw error;
      })
    )
  }
}
