import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorizationService } from '../common/services/authorization.service';
import { CategoryService } from '../common/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  catId: number;

  // tslint:disable-next-line: variable-name

  constructor(
    private activatedRoute: ActivatedRoute,
    private catService: CategoryService,
    private authService: AuthorizationService) { }

  // @Input() set isAuthorized(value: boolean) {
  //   this._isAutorized = value;
  // }

  get isAuthorized() {
    return this.authService.isAuthorized;
  }

}
