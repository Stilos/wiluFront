export class User {
  public id: number;
  public name: string;
  public surname: string;

  constructor(id: number, name: string, surname: string){
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
}
