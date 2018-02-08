import { Bookmark } from "./bookmark.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class BookmarksService {
    constructor(private http: HttpClient) { }

    bookmarksArrayUpdated = new Subject<Bookmark[]>();



    private bookmarksArray: Bookmark[] = [
    ]

    getBookmarks(): Observable<Bookmark[]> {
        return this.http.get<Bookmark[]>('http://localhost:8080/api/bookmarks', { observe: 'body', responseType: 'json' });
    }
    
    getUserBookmarks(userId: number): Observable<Bookmark[]> {
        return this.http.get<Bookmark[]>('http://localhost:8080/api/bookmarks/' + userId, { observe: 'body', responseType: 'json' });
    }

    deleteBookmark(id: number, userId: number) {
        return this.http.delete<Bookmark>('http://localhost:8080/api/bookmarks/delete/' + id).subscribe(() => {
            this.getUserBookmarks(userId).subscribe((bookmarks: Bookmark[]) => {
                this.bookmarksArrayUpdated.next(bookmarks);
            })
        });
    }

    updateBookmark(bookmark: Bookmark, userId: number) {
        return this.http.post<Bookmark>('http://localhost:8080/api/bookmarks/register', bookmark).subscribe(() => {
            this.getUserBookmarks(userId).subscribe((bookmarks: Bookmark[]) => {
                this.bookmarksArrayUpdated.next(bookmarks);
            })
        });;
    }
}
