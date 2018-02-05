import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Bookmark } from '../bookmark.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.css']
})
export class BookmarkItemComponent implements OnInit {
  @Input() bookmark: Bookmark;
  @ViewChild('f') editForm: NgForm;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.editForm.setValue({
        name: this.bookmark.name,
        url: this.bookmark.url,
      })
    }, 500)

  }

}
