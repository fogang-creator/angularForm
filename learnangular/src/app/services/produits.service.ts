import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { ProduitElement } from "../models/produits.model";

@Injectable({
    providedIn: 'root',
  })

  export class ProduitsServce {

    private readonly PRODUIT_API_URL = 'api/produits'; 
    //produits ici represente la variable que contien createDb()
    
    constructor(private http: HttpClient) {}

    //obtenir toute la liste des produits
    public getProduits(): Observable<ProduitElement[]> {
        return this.http.get<ProduitElement[]>(this.PRODUIT_API_URL).pipe(
            tap( produits=>console.log('produit', produits)), 
            catchError(this.handleError)
        );
    }

    //ajouter des produits
    public createProduits(produit :ProduitElement): Observable<ProduitElement> {
      return this.http.post<ProduitElement>(this.PRODUIT_API_URL, produit).pipe(
         catchError(this.handleError)
      );
  }

    //modifier un produit (j'ai besoin de l'id de chaque produit)

public updateProduit(produit :ProduitElement): Observable<ProduitElement> {
  return this.http.put<ProduitElement>(`${this.PRODUIT_API_URL}/${produit.id}`, produit).pipe(
     catchError(this.handleError)
  );
}

public getProduitById(id:number): Observable<ProduitElement> {
  const url =`${this.PRODUIT_API_URL}/${id}`;
  if(id==0){
    return of(this.getDefaultProduit());
  }
  return this.http.get<ProduitElement>(url).pipe(
    catchError(this.handleError)
  )
}

private getDefaultProduit():ProduitElement{
  return{
    id: 0,
    name:"",
    weight:0,
    symbol:""
  }
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