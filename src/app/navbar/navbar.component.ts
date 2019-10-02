import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../common/services/authorization.service';
import { AuthToken } from '../common/models/auth-token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: AuthToken;

  constructor(private service: AuthorizationService) { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('pdks-token'));
  }

  logout() {
    if (this.token !== null) {
      this.service.logout(this.token);
      localStorage.removeItem('pdks-token');
    }
  }

  get isAdmin() {
    return this.token == null ? false : this.token.isAdmin;
  }

}
