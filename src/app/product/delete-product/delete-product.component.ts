import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product: Product = {};
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  getProduct(id) {
    this.productService.getProductById(id).subscribe(value => {
      this.product = value;
    });
  }

  deleteProduct(id) {
    this.productService.deleteProductById(id).subscribe(() => {
        alert('Xoá thành công');
        this.router.navigate(['/list-product']);
      },
      error => console.log(error));
  }
}
