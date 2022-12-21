import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  ApiCategories,
  APIProducts,
  ApiProduct,
} from '../models/api-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  private apiOyshoCategories: string;
  constructor(private httpClient: HttpClient) {
    this.apiOyshoCategories = environment.oyshoCategoriesUrl;
  }

  getApiCategory(): Observable<ApiCategories> {
    return this.httpClient.get<ApiCategories>(`${this.apiOyshoCategories}/category`);
  }

  getApiProducts(): Observable<APIProducts> {
    return this.httpClient.get<APIProducts>(
      `${this.apiOyshoCategories}/category/1010609772/product`
    );
  }

  getApiDetail(prodId: string): Observable<ApiProduct> {
    return this.httpClient.get<ApiProduct>(
      `${this.apiOyshoCategories}/category/1010609772/product/${prodId}/detail`
    );
  }
}
