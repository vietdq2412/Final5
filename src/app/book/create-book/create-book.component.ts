import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  createBook() {
    this.bookService.createNewBook(this.book).subscribe(() => {
      alert('Thành công');
    }, () => {
      alert('Xảy ra lỗi');
    });
  }
}
