import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private productService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  getProductByPromise(id) {
    return this.productService.getBookById(id).toPromise();
  }

  getBook(id) {
    this.productService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

  updateBook(id) {
    this.productService.updateBook(id, this.book).subscribe(() => {
      alert('Thành công');
    }, () => {
      alert('Xảy ra lỗi');
    });
  }

}
