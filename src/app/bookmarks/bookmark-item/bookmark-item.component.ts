import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Bookmark } from '../bookmark.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.css']
})
export class BookmarkItemComponent implements OnInit {
  @Input() bookmark: Bookmark;
  @ViewChild('f') editForm: NgForm;
  isEditMode = false;
  isInBookmarks = this.router.url.indexOf('bookmarks') > -1 ? true : false;

  constructor(private router: Router, private bookmarksService: BookmarksService) { }

  ngOnInit() {
    // console.log(this.bookmark)
    setTimeout(() => {
      this.editForm.setValue({
        name: this.bookmark.name,
        url: this.bookmark.url,
      });
    }, 1500);

  }

  onDelete(){
    this.bookmarksService.deleteBookmark(this.bookmark.id, this.bookmark.userId);
    this.isEditMode = false;
  }

  onSave(form){
    this.bookmarksService.updateBookmark(
      new Bookmark(this.bookmark.id, this.bookmark.userId, form.value.name, form.value.url),
      this.bookmark.userId);
      this.isEditMode = false;
  }

  onEdit() {
    this.isEditMode = !this.isEditMode;
  }
}
