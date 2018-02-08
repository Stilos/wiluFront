import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Bookmark } from '../bookmark.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.css']
})
export class BookmarkItemComponent implements OnInit {
  @Input() bookmark: Bookmark;
  @ViewChild('f') editForm: NgForm;
  isInBookmarks = this.router.url.indexOf('bookmarks') > -1 ? true : false;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.bookmark)
    console.log(this.isInBookmarks)
    setTimeout(() => {
      this.editForm.setValue({
        name: this.bookmark.name,
        url: this.bookmark.url,
      });
    }, 500);

  }

}
