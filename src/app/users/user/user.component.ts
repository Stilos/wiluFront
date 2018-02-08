import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;


  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onUserSelect() {
  }

  onUserDelete() {
    this.usersService.removeUser(this.user.id);
  }

  onUserEdit() {
    this.router.navigate(['edit/' + this.user.id], {relativeTo: this.route});
  }
}
