import {Component} from '@angular/core';
import {LibraryService} from '../services/LibraryService';

@Component({
  selector: 'edit-component',
  templateUrl: "manage/book/edit.html"
})
export class EditComponent {
  private books:Object[] = [];
  private param = {query: '', searchFlag: false};

  constructor(private libraryService: LibraryService) {
    var that = this;
    libraryService.getAllBooks().then(response => {
      that.books = response.json();
    });
  }

  searchBarClick() {
    this.param.query = '';
    this.param.searchFlag = true;
    document.getElementById("iptSearch").focus();
  }

  cancelFilter(){
    var that = this;
    this.param.searchFlag = false;
    this.libraryService.getAllBooks().then(response => {
      that.books = response.json();
    });
  }

  queryBooks(value:string) {
    var that = this;
    this.libraryService.getBookLikeName(value).then(response => {
      that.books = response.json();
    })
  }

  removeBook(value:string){
    var that = this;
    event.stopPropagation();
    this.libraryService.removeBook(value).then(response =>{
      that.books = response.json();
    })
  }
}
