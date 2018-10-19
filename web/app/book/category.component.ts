import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LibraryService} from '../services/LibraryService';

@Component({
  selector: 'category-component',
  templateUrl: "app/book/category.html"
})
export class CategoryComponent {
  public categoryList: Object[] = [];
  public param: any = {searchFlag: false, query: ''};
  public filterBook: Object[] = [];

  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
    var that = this;
    this.route.params.forEach((param: any) => {
      if (param.id != '_i') {
        that.route.queryParams.subscribe(queryParam => {
          sessionStorage.setItem("account", queryParam["account"]);
          libraryService.getUserName(queryParam["account"]).then(response => {
            sessionStorage.setItem("accountName", response.json().accountName);
          });
        });
      }
    });


    libraryService.getAllCategory().then(response => {
      that.categoryList = response.json();
    });
  }

  searchBarClick() {
    this.param.query = '';
    this.filterBook = [];
    this.param.searchFlag = true;
    document.getElementById("iptSearch").focus();
  }

  queryBooks(value: string) {
    var that = this;
    this.libraryService.getBookLikeName(value).then(response => {
      that.filterBook = response.json();
    })
  }
}
