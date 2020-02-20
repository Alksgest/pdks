import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../common/model/Category';
import { AuthorizationService } from '../../common/services/authorization.service';

@Component({
  selector: 'pdks-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  public categories: Category[];

  constructor(private service: AuthorizationService) { }

  ngOnInit() {
  }

  logout() {
    const token: string = localStorage.getItem('pdks-token');
    if (token !== null) {
      this.service.logout(token);
      localStorage.removeItem('pdks-token');
    }
  }

  get isAdmin() {
    return this.service.isAdmin;
  }

}
