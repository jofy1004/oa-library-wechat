import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LibraryService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAllCategory() {
    return this.http.get('/getCategory').toPromise();
  }

  getBooksByCategory(category:any) {
    return this.http.post('/getBooksByCategory', JSON.stringify(category), {headers: this.headers}).toPromise();
  }

  getBookById(book:any) {
    return this.http.post('/getBookById', JSON.stringify(book), {headers: this.headers}).toPromise();
  }

  borrowBook(bookId:string, account:string, accountName:string) {
    return this.http.post('/borrowBook', JSON.stringify({
      id: bookId,
      account: account,
      accountName: accountName
    }), {headers: this.headers}).toPromise();
  }

  getMyBooks(account:Object) {
    return this.http.post('/getMyBooks', JSON.stringify(account), {headers: this.headers}).toPromise();
  }

  returnBook(bookId:string, account:string) {
    return this.http.post('/returnBook', JSON.stringify({
      bookId: bookId,
      account: account
    }), {headers: this.headers}).toPromise();
  }

  getHistory(account:string) {
    return this.http.post('/getHistory', JSON.stringify({account: account}), {headers: this.headers}).toPromise();
  }

  getUserName(account:string) {
    return this.http.post('/getUserName', JSON.stringify({account: account}), {headers: this.headers}).toPromise();
  }

  getBookLikeName(value:string){
    return this.http.post('/getBookLikeName', JSON.stringify({name: value}), {headers: this.headers}).toPromise()
  }
}
