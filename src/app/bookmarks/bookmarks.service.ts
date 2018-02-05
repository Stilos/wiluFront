import { Bookmark } from "./bookmark.model";

export class BookmarksService {
    private bookmarksArray: Bookmark[] = [
        new Bookmark(1, 3, 'huhu', 'www.wp.pl'),
        new Bookmark(1, 3, 'huhu', 'www.wp.pl'),
        new Bookmark(1, 3, 'huhu', 'www.wp.pl'),
        new Bookmark(1, 3, 'huhu', 'www.wp.pl'),
        new Bookmark(1, 3, 'huhu', 'www.wp.pl'),
    ]

    getBookmarks(): Bookmark[]{
        return this.bookmarksArray.slice();
    }
}
