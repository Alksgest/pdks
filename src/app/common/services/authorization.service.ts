import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { throwError, Subscription, Observable } from 'rxjs';

import { AuthToken } from 'src/app/common/model/authToken';
import { environment } from 'src/environments/environment';
import { AccountCredentials } from 'src/app/common/model/accountCredentials';

import { User } from '../model/User';
import { UserRole } from '../model/UserRole';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public isAuthorized = false;
  public isCredentialsValid = true;
  public currentUser: User = null;

  constructor(private http: HttpClient) {
    const encoded = localStorage.getItem('pdks-token');
    if (encoded !== null) {
      const token: AuthToken = JSON.parse(atob(encoded));
      this.isAuthorized = true;
      this.currentUser = token.user;
    }
  }

  public login(credentials: AccountCredentials): any {

    const loginUrl = environment.apiUrl + 'login/';
    const options = this.createOptions(credentials);

    console.log('Trying to loging in...');

    return this.http.get<string>(loginUrl, options)
      .subscribe(
        (token: string) => {
          this.saveUserCredentials(token);
        },
        (error: HttpErrorResponse) => {
          this.invalidateUser();
          return throwError(error.message);
        }
      );
  }



  public logout(token: string): Subscription {
    this.invalidateUser();

    const url = environment.apiUrl + 'logout/';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: JSON.stringify(token),
      })
    };

    return this.http.get<string>(url, options).subscribe();
  }

  private createOptions(credentials: AccountCredentials): {} {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Account-Credentials': JSON.stringify(credentials),
      }),
      responseType: 'text' as 'json'
    };
  }

  private saveUserCredentials(token: string) {
    localStorage.setItem('pdks-token', token);
    const authToken = JSON.parse(atob(token));
    this.isCredentialsValid = true;
    this.isAuthorized = true;
    this.currentUser = authToken.user;
  }

  private invalidateUser(): void {
    this.isCredentialsValid = false;
    this.isAuthorized = false;
    this.currentUser = null;
  }

  get isAdmin(): boolean {
    return this.currentUser === null ? false : this.currentUser.userRole === UserRole.Admin;
  }
}
