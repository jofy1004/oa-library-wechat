import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {CommonModule}     from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';


//Components
import {AppComponent}  from './app.component';
import {AddComponent}  from './book/add.component';
import {EditComponent}  from './book/edit.component';
import {AddCategoryComponent} from "./book/addCategory.component";
import {BorrowedListComponent} from "./book/borrowedList.component";
//Services
import {LibraryService} from './services/LibraryService';


@NgModule({
  imports: [BrowserModule, HttpModule, routing, FormsModule, CommonModule, FileUploadModule],
  declarations: [AppComponent, EditComponent, AddComponent,AddCategoryComponent,BorrowedListComponent],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class ManageModule {

}
