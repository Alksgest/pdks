import { Component, OnInit, Input } from '@angular/core';
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

  authForm: FormGroup;

  // tslint:disable-next-line: variable-name
  private _isAutorized = false;

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

  @Input() set isAuthorized(value: boolean) {
    this._isAutorized = value;
  }

  get isAuthorized() {
    return this._isAutorized;
  }

  doLogin(credentials: AccountCredentials) {
    console.log(credentials);
    this.service.login(credentials);
    this.cleanFields();
  }

  cleanFields() {
    this.authForm.get('username').setValue('');
    this.authForm.get('password').setValue('');
  }

  get isValid() {
    return this.service.isCredentialsValid;
  }
}
