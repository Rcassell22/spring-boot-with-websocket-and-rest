import { Component } from '@angular/core';
import {Book} from './book/book';
import {BookService} from './book/book.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookStore';
  books!: Book[];

  constructor(private router: Router, private bookService: BookService) {
  }

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.router.navigate(['add-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getBooks();
    });
  }
}
