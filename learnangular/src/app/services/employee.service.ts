import { catchError, Observable, throwError, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Employee } from '../shared/employee';


@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    private readonly baseURL ="localhost:8080/api/v1/employees";
    

    httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    constructor( private httpClient: HttpClient){}

    getEmployeesList(): Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}`);
        // .pipe(
        //     tap( produits=>console.log('produit', produits)), 
        //     catchError(this.handleError)
        // );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
}