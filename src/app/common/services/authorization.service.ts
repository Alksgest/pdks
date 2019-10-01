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
    const valueToSend = JSON.stringify(credentials);
    return this.http.post<AuthToken>(environment.apiUrl + 'login/', credentials);
  }

  logout(token: AuthToken) {
    const valueToSend = JSON.stringify(token);
    return this.http.post<AuthToken>(environment.apiUrl + 'logout/', token);
  }

}
