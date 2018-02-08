import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsersService} from './users.service';
import {User} from './user.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersArray: User[];
  subscription: Subscription;
  isFormVisible = false;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.usersArray = users;
    });
      this.subscription = this.usersService.usersArrayUpdated.subscribe((users: User[]) => {
        this.usersArray = users;
    });
  }

  onAddNewUser() {
    this.isFormVisible = true;
    this.router.navigate(['/users/edit/']);
  }


  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}
