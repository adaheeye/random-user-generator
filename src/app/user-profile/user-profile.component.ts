
import { Component, OnInit } from '@angular/core';
import { User } from '../user-profile.model';
import { Country } from '../country/countries.model'
import { CountriesService } from 'src/app/country/countries.service'
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public users: User[];
  private currentExpandedUser: User;
  private previousExpandedUser: User;
  public countries: Country[];
  public userCountry: Country;

  constructor(private userService: UserProfileService, private countriesService: CountriesService) { }

  public ngOnInit() {
    this.load();
  }

  public load(): void {
    this.getUserProfiles();
    this.getCountries();
  }

  public getUserProfiles() {
    this.userService.getUsers()
      .subscribe((users) => {
        if (!!users) {
          this.users = users.results as User[];
        }
      });
  }

  public removeAllUsers(): void {
    this.users = null;
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

  public getUserCountry(user: User): Country {
    return this.countries.find((country: Country) => country.alpha2 === user.nat);
  }

  private getCountries() {
    this.countriesService.getCountries()
      .subscribe((countries) => {
        if (!!countries) {
          this.countries = countries as Country[];
        }
      });
  }

}
