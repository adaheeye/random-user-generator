
import { Component, OnInit } from '@angular/core';
import { User } from '../user-profile.model';
import { UserService } from 'src/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public users: User[];
  private currentExpandedUser: User;
  private previousExpandedUser: User;
  constructor(private userService: UserService) { }

  public ngOnInit() {
    this.getUserProfiles();

  }

  public getUserProfiles() {
    this.userService.getUsers().subscribe((users) => {
      if (!!users) {
        this.users = users.results as User[];
      }
    });
  }

  public expandUser(user: User): void {
    if (this.previousExpandedUser) {
      this.previousExpandedUser.isExpanded = false;
    }
    this.currentExpandedUser = user;
    this.previousExpandedUser = this.currentExpandedUser;
    user.isExpanded = true;
  }

  public collapseUser(user: User): void {
    this.currentExpandedUser = null;
    user.isExpanded = false;
  }

  public isUserExpanded(user: User): boolean {
    return user.isExpanded ? true : false;
  }

  public deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }

  public generateUsers(): void {
    this.getUserProfiles();
  }

}
