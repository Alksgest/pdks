import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './common/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'msn';

  constructor(private service: AuthorizationService) { }

  ngOnInit(): void {

  }

  get username() {
    if (this.service.currentUser !== null) {
      return this.service.currentUser.username;
    }
    return null;
  }
}
