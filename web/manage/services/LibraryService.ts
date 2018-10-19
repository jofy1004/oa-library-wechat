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

  getAllBooks() {
    return this.http.get('/getAllBooks').toPromise();
  }

  getBookById(book:Object) {
    return this.http.post('/getBookByIdNotRef', JSON.stringify(book), {headers: this.headers}).toPromise();
  }

  saveOrUpdateBook(book:Object) {
    return this.http.post('/saveOrUpdateBook', JSON.stringify(book), {headers: this.headers}).toPromise();
  }

  getBookLikeName(value:string){
    return this.http.post('/getBookLikeName', JSON.stringify({name: value}), {headers: this.headers}).toPromise()
  }

  removeBook(value:string){
    return this.http.post('/removeBook', JSON.stringify({id: value}), {headers: this.headers}).toPromise()
  }

  /**
   * 新增类别
   * @param category
   * @returns {Promise<T>}
   */
  addCategory(category:Object){
    return this.http.post('/addCategory', JSON.stringify(category), {headers: this.headers}).toPromise();
  }

  /**
   * 修改类别
   * @param category
   * @returns {Promise<T>}
   */
  editCategory(category:Object){
    return this.http.post('/editCategory', JSON.stringify(category), {headers: this.headers}).toPromise();
  }

  /**
   * 删除类别
   * @param _id
   * @returns {Promise<T>}
   */
  deleteCategory(id:String){
    return this.http.post('/deleteCategory', JSON.stringify({id:id}), {headers: this.headers}).toPromise()
  }

  /**
   * get所有借阅记录
   */
  getAllBorrowedList(){
    return this.http.get('/getAllBorrowedList').toPromise();
  }

  /**
   * 管理原 还书操作
   * @param bookId
   * @returns {Promise<T>}
   */
  managerReturnBook(bookId:string) {
    return this.http.post('/managerReturnBook', JSON.stringify({
      bookId: bookId,
    }), {headers: this.headers}).toPromise();
  }

}
