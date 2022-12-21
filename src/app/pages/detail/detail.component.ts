import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/products/api/product.service';
import { Product } from 'src/app/core/services/products/models/product.interface';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 prodId: string  | null = '';
 public productDetail!: Product;

  constructor(private productService: ProductService,  private router: Router,
    private route: ActivatedRoute) {
      this.prodId = this.route.snapshot.paramMap.get('prodId');
  }

  ngOnInit(): void {
   if (this.prodId){
    this.getProductDetail(this.prodId)
   }
  }

  getProductDetail(prodId: string){
    this.productService.getDetailProduct(prodId).subscribe({
      next: (result) => { this.productDetail = result },
      error: (err) => {console.log(err)}
    })
  }
}
