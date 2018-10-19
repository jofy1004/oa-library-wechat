import {Component} from '@angular/core';
import {LibraryService} from '../services/LibraryService';

@Component({
  selector: 'history-component',
  templateUrl: "app/book/history.html"
})
export class HistoryComponent {
  history = {};

  constructor(private libraryService: LibraryService) {
    var that = this;
    let account = sessionStorage.getItem('account');
    libraryService.getHistory(account).then(response => {
      that.history = response.json();
    })
  }

}
