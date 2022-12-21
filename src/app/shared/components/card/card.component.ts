import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/products/api/product.service';
import { Product } from 'src/app/core/services/products/models/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  public productDetail!: Product;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  public toProductDetail(product: Product){
    this.router.navigate(['detail', product.id.toString()])
  }

  errorImage(src: any){
    const patchImg = "https://static.oysho.net/6/photos2//2022/I/3/1/p/0642/828/599/0642828599_2_7_0.jpg"
     if(src.type === 'error'){
      src.target.src = patchImg;
     }
  }

}
