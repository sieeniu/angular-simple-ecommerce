import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiConfig } from '@core/config';
import { Product } from '@core/models';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);

  public getElectronics(): Observable<Product[]> {
    return this.getProductsByCategory(apiConfig.categories.electronics);
  }

  private getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiConfig.baseUrl}/products/category/${category}`).pipe(
      catchError((error) => {
        console.error(`Error fetching products for category ${category}:`, error);
        return throwError(() => error);
      }),
    );
  }
}
