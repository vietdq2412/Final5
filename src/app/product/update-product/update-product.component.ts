import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product = {};
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      this.id = +paramMap.get('id');
      // this.product = await this.getProductByPromise(this.id);
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
  }

  getProductByPromise(id) {
    return this.productService.getProductById(id).toPromise();
  }

  getProduct(id) {
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
    });
  }

  updateProduct(id) {
    this.productService.updateProduct(id, this.product).subscribe(() => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }

}
