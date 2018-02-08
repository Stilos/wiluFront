import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarksArray: Bookmark[];

  constructor(private bookmarksService: BookmarksService) {
  }


  ngOnInit() {
    this.bookmarksService.getBookmarks().subscribe((bookmarks: Bookmark[]) => {
      this.bookmarksArray = bookmarks;
    });
  }
}
