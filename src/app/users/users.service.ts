import {User} from './user.model';
import {Subject} from 'rxjs/Subject';

export class UsersService {
  usersArrayUpdated = new Subject<User[]>();
  isEditMode = new Subject<{user: User, isEdit: boolean}>();

  private usersArray: User[] = [
    new User(1, 'Some', 'One'),
    new User(2, 'Some2', 'One2'),
    new User(3, 'Some3', 'One3'),
  ];

  private getUserIndexByUserId(userId: number) {
    return this.usersArray.indexOf(this.usersArray.find(user => user.id === userId));
  }

  public getUsers(): User[] {
    return this.usersArray.slice();
  }

  public getUser(id: number): User {
    return this.usersArray.slice()[this.getUserIndexByUserId(id)];
  }

  public removeUser(id) {
    this.usersArray.splice(this.getUserIndexByUserId(id), 1);
    this.usersArrayUpdated.next(this.usersArray.slice());
  }

  public addUser(user: User) {
    // TODO: Get rid of id increment
    const newUser: User = user;
    newUser.id = this.usersArray.length + 1;

    this.usersArray.push(newUser);
    this.usersArrayUpdated.next(this.usersArray.slice());
  }

  public updateUser(user: User) {
    this.usersArray[this.getUserIndexByUserId(user.id)] = user;
    this.usersArrayUpdated.next(this.usersArray.slice());
  }
}
