import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';
import {routing} from './app.routing'
//Components
import {AppComponent}  from './app.component';
import {BooksComponent} from './book/books.component';
import {CategoryComponent} from './book/category.component';
import {DetailComponent} from './book/detail.component';
import {BorrowedComponent} from './book/borrowed.component';
import {HistoryComponent} from './book/history.component';

//Services
import {LibraryService} from './services/LibraryService'


@NgModule({
  imports: [BrowserModule, HttpModule, routing, FormsModule],
  declarations: [AppComponent, BooksComponent, CategoryComponent, DetailComponent, BorrowedComponent, HistoryComponent],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
