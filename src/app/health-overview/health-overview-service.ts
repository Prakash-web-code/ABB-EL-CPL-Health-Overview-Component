import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { IDonut } from './health-overview-interface';
 
@Injectable({
    providedIn: 'root'
})
 
export class RestApiService {
 
   private healthOverview = '../assets/api/data.json';
 
    constructor(private http: HttpClient) { }
    getData(): Observable<IDonut[]> {
        return this.http.get<IDonut[]>(this.healthOverview)
            .pipe(
               tap(data => data),
                catchError(this.handleError)
            )
    }  
 
    private handleError(err: HttpErrorResponse) {
        let errMessage = '';
 
        if (err.error instanceof ErrorEvent) {
            errMessage = `An error occured: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return throwError(errMessage);
    }
}