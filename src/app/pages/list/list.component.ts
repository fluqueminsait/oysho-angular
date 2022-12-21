import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/products/api/product.service';
import { Product } from 'src/app/core/services/products/models/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public productsList!: Product[];
  public inputSearch: string = '';
  public optionSort!: string;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
    this.getCategoryList()
  }

  getCategoryList(){
    this.productService.getCategoriesProduct().subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (error) => {console.log(error)}
    })
  }

  getProductList() {
    this.productService.getListProducts().subscribe({
      next: (result) => {
        this.productsList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sortList(optionSelected: string) {
    switch (optionSelected) {
      case 'A-Z': {
        this.productsList = this.productsList.sort(this.sortProdAtoZ);
        break;
      }
      case 'Expensive': {
        this.productsList = this.productsList.sort(this.sortProdByPrice);
        break;
      }
      case 'Cheap': {
        this.productsList = this.productsList.sort(this.sortProdByPrice).reverse()
      }
    }
  }

  sortProdByPrice(a: any, b: any) {
    return b.price - a.price;
  }

  sortProdAtoZ(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }
}
