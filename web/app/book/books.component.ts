import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {LibraryService} from '../services/LibraryService'

@Component({
  selector: 'books-component',
  templateUrl: 'app/book/books.html'
})

export class BooksComponent {
  public books:Object[] = [];
  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
    var that = this;
    this.route.params.forEach((param: Params) => {
      libraryService.getBooksByCategory(param).then(response => {
        that.books = response.json();
      });
    });
  }
}
