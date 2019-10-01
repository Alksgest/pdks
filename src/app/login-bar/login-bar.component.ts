import { Component, OnInit } from '@angular/core';
import { AccountCredentials } from '../common/models/account-credentials';
import { AuthorizationService } from '../common/services/authorization.service';
import { map, catchError } from 'rxjs/operators';
import { AuthToken } from '../common/models/auth-token';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  isValid = true;

  authForm: FormGroup;

  constructor(
    private service: AuthorizationService,
    private formBuilder: FormBuilder) {

    this.authForm = formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  doLogin(credentials: AccountCredentials) {
    console.log(credentials);
    this.service.login(credentials)
      .pipe(
        map((token: AuthToken) => {
          console.log(token);
          localStorage.setItem('pdks-token', JSON.stringify(token));
          this.isValid = true;
        }),
        catchError((error: HttpErrorResponse) => {
          this.isValid = false;
          return throwError(error.message);
        }
        )
      ).subscribe();

  }
}
