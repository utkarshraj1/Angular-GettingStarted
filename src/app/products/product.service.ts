import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productUrl).pipe(
      //tap(data => console.log('ALL',JSON.stringify(data))),
      catchError(this.handleError)
    );

    //tap will expose the data in console
  }

  //Error handling
  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    if(err.error instanceof ErrorEvent) {
      errorMsg = `The error occurred: ${err.error.message}`;
    }
    else {
      errorMsg = `Server returned code ${err.status} and message is ${err.message}`;
    }

    console.log(errorMsg);
    return throwError(errorMsg);
  }
}