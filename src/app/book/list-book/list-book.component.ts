import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private productService: BookService) {
  }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllBook().subscribe(result => {
      this.books = result;
    }, error => console.log(error));
  }

  deleteBook(id) {
    this.productService.deleteBookById(id).subscribe(() => {
        alert('Xoá thành công');
        this.getAllProduct();
      },
      error => console.log(error));
  }
}
