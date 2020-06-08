import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserProfileService {

  private readonly resourceUrl = 'https://randomuser.me/api/?results=10';
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.resourceUrl)
      .pipe(map((res: Response) => res));
  }
}
