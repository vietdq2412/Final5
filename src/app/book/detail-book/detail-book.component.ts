import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-delete-product',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private productService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  getBook(id) {
    this.productService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }
}
