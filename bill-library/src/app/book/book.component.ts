import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  book = { isbn: '' };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('ISBN:', this.book.isbn);
  }

}
