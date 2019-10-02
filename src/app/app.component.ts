import { Component, OnInit } from '@angular/core';
import { User } from './common/models/user';
import { AuthToken } from './common/models/auth-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'msn';
  currentUser: User;

  constructor() { }

  ngOnInit(): void {
    const tkn: AuthToken = JSON.parse(localStorage.getItem('pdks-token'));
    this.currentUser = tkn.user;
  }
}
