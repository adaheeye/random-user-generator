import {Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { User } from '../user-profile.model';
import { Country } from '../country/countries.model';
import { CountriesService } from 'src/app/country/countries.service';
import { UserProfileService } from './user-profile.service';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public users: User[];
  public countries: Country[];
  public allUsersExpanded = false;
  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private userService: UserProfileService,
    private countriesService: CountriesService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    this.getCountries();
    this.generateUsers();
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public generateUsers() {
    this.userService.getUsers()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((users) => {
        if (!!users) {
          this.users = users.results as User[];
          this.cdr.markForCheck();
        }
      });
  }

  public removeAllUsers(): void {
    this.users = [];
  }

  public deleteUser(user: User): void {
    this.users.splice(this.users.indexOf(user), 1);
  }

  public toggleAllUsers(): void {
    this.allUsersExpanded = !this.allUsersExpanded;
    this.users.forEach((user) => user.isExpanded = this.allUsersExpanded)
  }

  private getCountries() {
    this.countriesService.getCountries()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((countries) => {
        if (!!countries) {
          this.countries = countries as Country[];
        }
      });
  }

}
