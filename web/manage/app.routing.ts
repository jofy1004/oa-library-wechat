import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddComponent} from "./book/add.component";
import {EditComponent} from "./book/edit.component";
import {AddCategoryComponent} from './book/addCategory.component';
import {BorrowedListComponent} from '../manage/book/borrowedList.component';


const appRoutes: Routes = [
  {
    path: 'manage/:id',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path:'addCategory',
    component: AddCategoryComponent
  },
  {
    path: 'borrowedList',
    component: BorrowedListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
