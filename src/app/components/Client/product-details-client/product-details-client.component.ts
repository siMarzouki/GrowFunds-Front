import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-client',
  templateUrl: './product-details-client.component.html',
  styleUrls: ['./product-details-client.component.css']
})
export class ProductDetailsClientComponent {
  pid!: number;
  product!: Product;
  constructor(private router: Router, private _service: ProductService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id'];
    this._service.getProductByIdAdmin(this.pid).subscribe(res => {
      this.product = res;
    });
  }
}
