import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private urlBackend = 'http://localhost:3000/products';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBackend);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.urlBackend}/${id}`);
  }

  addProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(this.urlBackend, p, this.httpOptions);
  }

  updateProduct(id: string, p: Product): Observable<Product> {
    return this.http.put<Product>(`${this.urlBackend}/${id}`, p, this.httpOptions);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.urlBackend}/${id}`, this.httpOptions);
  }
}
