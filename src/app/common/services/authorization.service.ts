import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User, UserRole } from 'src/contract';
import { AuthToken } from 'src/contract/model/authToken';
import { AccountCredentials } from 'src/contract/model/accountCredentials';

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
    const token: AuthToken = JSON.parse(localStorage.getItem('pdks-token'));
    if (token !== null) {
      this._isAuthorized = true;
      this._currentUser = token.user;
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

  get isAdmin() {
    return this._currentUser === null ? false : this._currentUser.userRole === UserRole.Admin;
  }
}
