import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './book/books.component';
import {CategoryComponent} from './book/category.component';
import {DetailComponent} from './book/detail.component';
import {BorrowedComponent} from './book/borrowed.component';
import {HistoryComponent} from './book/history.component';

const appRoutes: Routes = [
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'books/:id',
    component: BooksComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'borrowed',
    component: BorrowedComponent
  },
  {
    path: ':id',
    component: CategoryComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
