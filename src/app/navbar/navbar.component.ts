import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../common/services/authorization.service';
import { AuthToken } from '../common/models/auth-token';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: AuthorizationService) { }

  ngOnInit() {
  }

  logout() {
    const token = JSON.parse(localStorage.getItem('pdks-token'));
    if (token !== null) {
      this.service.logout(token);
      localStorage.removeItem('pdks-token');
    }
  }

  get isAdmin() {
    return this.service.isAdmin;
  }

}
