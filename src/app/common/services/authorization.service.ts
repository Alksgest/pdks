import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AccountCredentials } from '../models/account-credentials';
import { AuthToken } from '../models/auth-token';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  // tslint:disable-next-line: variable-name
  private _isAuthorized = false;
  // tslint:disable-next-line: variable-name
  private _isCredentialsValid = true;
  // tslint:disable-next-line: variable-name
  private _currentUser: User = null;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('pdks-token');
    if (token !== null) {
      this._isAuthorized = true;
    }
  }

  login(credentials: AccountCredentials) {
    return this.http.post<AuthToken>(environment.apiUrl + 'login/', credentials)
      .pipe(
        map((token: AuthToken) => {
          console.log(token);
          localStorage.setItem('pdks-token', JSON.stringify(token));
          this._isCredentialsValid = true;
          this._isAuthorized = true;
          this._currentUser = token.user;
        }),
        catchError(
          (error: HttpErrorResponse) => {
            this._isCredentialsValid = false;
            this._isAuthorized = false;
            this._currentUser = null;
            return throwError(error.message);
          }
        )
      ).subscribe();
  }

  logout(token: AuthToken) {
    this._isAuthorized = false;
    this._currentUser = null;
    return this.http.post<AuthToken>(environment.apiUrl + 'logout/', token).subscribe();
  }

  get isAuthorized() {
    return this._isAuthorized;
  }

  set isAuthorized(value: boolean) {
    this._isAuthorized = value;
  }

  get isCredentialsValid() {
    return this._isCredentialsValid;
  }

  get currentUser() {
    return this._currentUser;
  }
}
