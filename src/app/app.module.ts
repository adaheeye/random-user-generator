import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileService } from './user-profile/user-profile.service';
import { CommonModule } from '@angular/common';
import { CountriesService } from './country/countries.service';
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [UserProfileService, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
