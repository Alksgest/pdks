import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountCredentials } from '../models/account-credentials';
import { AuthToken } from '../models/auth-token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  login(credentials: AccountCredentials) {
    this.http.post<AuthToken>(environment.apiUrl + '/login', credentials);
  }

  logout(token: AuthToken) {
    this.http.post<AuthToken>(environment.apiUrl + '/logout', token);
  }

}
