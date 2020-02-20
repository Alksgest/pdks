import { Component, OnInit, Input } from '@angular/core';
import { AuthorizationService } from '../../../common/services/authorization.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AccountCredentials } from 'src/app/common/model/accountCredentials';

@Component({
  selector: 'pdks-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  authForm: FormGroup;

  @Input()
  public isAuthorized = false;

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

  doLogin(credentials: AccountCredentials): void {
    this.service.login(credentials);
    this.cleanFields();
  }

  cleanFields(): void {
    this.authForm.get('username').setValue('');
    this.authForm.get('password').setValue('');
  }

  get isValid(): boolean {
    return this.service.isCredentialsValid;
  }
}
