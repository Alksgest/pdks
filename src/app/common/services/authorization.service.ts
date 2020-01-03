import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User, UserRole } from 'src/contract';
import { AuthToken } from 'src/app/common/model/authToken';
import { AccountCredentials } from 'src/app/common/model/accountCredentials';
import { CustomHttpUrlEncodingCodec } from 'src/contract/encoder';

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
    const encoded = localStorage.getItem('pdks-token');
    if (encoded !== null) {
      const token: AuthToken = JSON.parse(atob(encoded));
      this._isAuthorized = true;
      this._currentUser = token.user;
    }
  }

  login(credentials: AccountCredentials) {
    const loginUrl = environment.apiUrl + 'login/';
    const options = { responseType: 'json' };
    console.log(credentials);
    console.log(loginUrl);
    return this.http.post<string>(loginUrl, credentials, { responseType: 'text' })
      .pipe(
        map((token: string) => {
          console.log(token);
          localStorage.setItem('pdks-token', token);

          const authToken = JSON.parse(atob(token));

          this._isCredentialsValid = true;
          this._isAuthorized = true;
          this._currentUser = authToken.user;
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

  logout(token: string) {
    this._isAuthorized = false;
    this._currentUser = null;

    // let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
    // queryParameters = queryParameters.set('AuthToken', token as any);

    return this.http.post<string>(environment.apiUrl + 'logout/',
      token).subscribe();
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
