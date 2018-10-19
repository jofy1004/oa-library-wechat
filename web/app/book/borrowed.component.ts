import {Component} from '@angular/core';
import {LibraryService} from '../services/LibraryService';

@Component({
  selector: 'borrowed-component',
  templateUrl: 'app/book/borrowed.html'
})
export class BorrowedComponent {
  public borrowedBooks:Object[] = [];
  account = sessionStorage.getItem('account');

  constructor(private libraryService: LibraryService) {
    var that = this;
    libraryService.getMyBooks({account: this.account}).then(response => {
      that.borrowedBooks = response.json();
    });
  }

  returnBook(bookId:string) {
    var that = this;
    this.libraryService.returnBook(bookId, this.account).then(response => {
      that.borrowedBooks = response.json();
    });
  }
}
