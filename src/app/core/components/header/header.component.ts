import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/products/api/product.service';
import { Category } from '../../services/products/models/product.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public categories!: Category[]
  constructor( private offcanvasService: NgbOffcanvas, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategoryList()
  }

  open(content: unknown) {
    this.offcanvasService.open(content).result;
  }

  getCategoryList(){
    this.productService.getCategoriesProduct().subscribe({
      next: (result) => {
        this.categories = result
      },
      error: (error) => {console.log(error)}
    })
  }

}
