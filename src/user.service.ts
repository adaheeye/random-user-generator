import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './app/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly resourceUrl = 'https://randomuser.me/api/?results=10';
  private subject = new Subject<any>();
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.resourceUrl).pipe(
      map((res: Response) => res
      ));
  }
}
