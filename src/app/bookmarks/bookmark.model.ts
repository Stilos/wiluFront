export class Bookmark{
    public id: number;
    public userId: number;
    public name: string;
    public url: string;

    constructor(id: number, userId: number, name: string, url: string){
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.url = url;
    }
}
