import {Component} from '@angular/core';
import {LibraryService} from '../../manage/services/LibraryService';

@Component({
  selector: 'borrowedList-component',
  templateUrl: 'manage/book/borrowedList.html'
})
export class BorrowedListComponent {
  public borrowedListBooks:Object[] = [];
  constructor( private libraryService: LibraryService) {
    var that=this;
    libraryService.getAllBorrowedList().then(response => {
      that.borrowedListBooks = response.json();
    });
  }

  /**
   * 管理员还书
   * @param bookId
   */
  managerReturnBook(bookId:string) {
    var that = this;
    this.libraryService.managerReturnBook(bookId).then(response => {
      that.borrowedListBooks = response.json();
    });
  }
}
