import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../common/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../common/services/category.service';
import { AuthorizationService } from '../common/services/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  catId: number;

  // tslint:disable-next-line: variable-name

  constructor(
    private service: ArticleService,
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
