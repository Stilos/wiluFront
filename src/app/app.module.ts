import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import {UsersService} from './users/users.service';
import {FormsModule} from '@angular/forms';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import {promise} from 'selenium-webdriver';
import { BookmarkItemComponent } from './bookmarks/bookmark-item/bookmark-item.component';
import fullyResolved = promise.fullyResolved;
import { BookmarksService } from './bookmarks/bookmarks.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: 'edit', component: EditUserComponent },
      { path: 'edit/:id', component: EditUserComponent }
    ]},
  { path: 'bookmarks', component: BookmarksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BookmarksComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    BookmarkItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService, BookmarksService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
