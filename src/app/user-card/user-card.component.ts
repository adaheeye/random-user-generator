import {Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user-profile.model';
import { Country } from '../country/countries.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User;
  @Input() countries: Country[];
  @Output() deleteUser = new EventEmitter<User>();

  public getUserCountry(user: User): Country | undefined {
    return this.countries.find(
      (country: Country) => country.alpha2 === user.nat
    );
  }
}
