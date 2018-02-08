import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookmark } from '../../bookmarks/bookmark.model';
import { BookmarksService } from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedUser: User = new User(0,'','');
  isEditMode: boolean;
  isNewUser: boolean = false;
  bookmarksArray: Bookmark[];
  bookmarksLoaded = false;

  @ViewChild('f') editForm: NgForm;

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private bookmarksService: BookmarksService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.usersService.getUser(+ params['id']).subscribe((user) => {
          this.editedUser = user;
          this.getBookmarksByUserId(this.editedUser.id);
        })
        setTimeout(() => {
          this.editForm.setValue({
            'name': this.editedUser.name,
            'surname': this.editedUser.surname,
          });
        }, 500);
      } else {
        this.isEditMode = false;
        this.isNewUser = true;
      }
    });

    this.bookmarksService.bookmarksArrayUpdated.subscribe((bookmarks: Bookmark[]) => {
      this.bookmarksArray = bookmarks;
    })
  }

  onCancel() {
    this.editForm.reset();
    this.router.navigate(['./users']);
  }

  onSubmit(form: NgForm) {
    if (this.isEditMode) {
      this.usersService.updateUser(new User(this.editedUser.id, form.value.name, form.value.surname));
    } else {
      this.usersService.addUser(new User(null, form.value.name, form.value.surname));
    }
    this.router.navigate(['./users']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getBookmarksByUserId(userId) {
    this.bookmarksService.getUserBookmarks(userId).subscribe((bookmarks: Bookmark[]) => {
      this.bookmarksArray = bookmarks;
      this.bookmarksLoaded = true;
    });
  }
}
