import {User} from './user.model';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  usersArrayUpdated = new Subject<User[]>();
  isEditMode = new Subject<{user: User, isEdit: boolean}>();

  constructor(private http: HttpClient) {}

  public getUsers():Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users', {observe:'body', responseType:'json'});
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/users/' + id, {observe:'body', responseType:'json'});
  }

  public removeUser(id) {
    this.http.delete('http://localhost:8080/api/users/delete/' + id).subscribe(
      () => {
      this.getUsers().subscribe((users: User[]) => {
        this.usersArrayUpdated.next(users);
      })
    });
    
  }

  public addUser(user: User) {
   this.updateUser(user)
  }

  public updateUser(user: User) {
    return this.http.post<User>('http://localhost:8080/api/users/register', user).subscribe(() => {
      this.getUsers().subscribe((users: User[]) => {
        this.usersArrayUpdated.next(users);
      })
    });
    
  }
}
