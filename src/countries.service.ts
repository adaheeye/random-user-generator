import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private readonly resourceUrl = './assets/country-icons/countries.json';
  private subject = new Subject<any>();
  constructor(private http: HttpClient) {}

  public getCountries(): Observable<any> {
    return this.http.get(this.resourceUrl);
  }
}
