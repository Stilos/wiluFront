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
import fullyResolved = promise.fullyResolved;

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
    EditUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
