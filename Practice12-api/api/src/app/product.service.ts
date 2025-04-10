import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://api.slingacademy.com/v1/sample-data/products/xyz';

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
