import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiProductService } from './api-product.service';
import { Product, Category } from '../models/product.interface';
import { ApiProduct, ApiCategory, ApiCategories } from '../models/api-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiProductService: ApiProductService) {
    
  }

  getCategoriesProduct(): Observable<Category[]> {
     return this.apiProductService
      .getApiCategory()
      .pipe(map((category) => {return category.categories.map((cat)=> ({
        id: cat.id,
        name: cat.name
      }))} ))
  }

  getListProducts(): Observable<Product[]> {
    return this.apiProductService.getApiProducts().pipe(
      map((APIProducts) => {
        return APIProducts.products
          .filter((product) => {
            return product.name !== '';
          })
          .map((product) => this.transformProducts(product));
      })
    );
  }

  getDetailProduct(prodId: string): Observable<Product> {
    return this.apiProductService
      .getApiDetail(prodId)
      .pipe(map((ApiProduct) => this.transformProducts(ApiProduct)));
  }

  transformCategory(apiCategory: ApiCategory): Category{
    return {
    id: apiCategory.id,
    name: apiCategory.name
  }}


  transformProducts(apiProduct: ApiProduct): Product {
    const imgUrl =
      apiProduct?.bundleProductSummaries[0]?.detail?.colors[0]?.image?.url;
    const price =
      apiProduct?.bundleProductSummaries[0]?.detail?.colors[0]?.sizes[0]?.price;
    return {
      id: apiProduct.id,
      name: apiProduct.name,
      nameEn: apiProduct.nameEn,
      image: `https://static.oysho.net/6/photos2/${imgUrl}_2_7_0.jpg`,
      longDescription:
        apiProduct.bundleProductSummaries[0]?.detail?.longDescription,
      price: this.priceWithDecimal(Number(price)),
    };
  }

  priceWithDecimal(num: number) {
    return Number((num / 100).toFixed(2)).toString();
  }
}
