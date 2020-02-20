import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

import { AuthToken } from '../../../common/model/authToken';
import { Article } from '../../../common/model/article';
import { ArticleService } from '../../../common/services/article.service';
import { CategoryService } from '../../../common/services/category.service';

@Component({
  selector: 'pdks-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _articles: Article[] = [];

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        map((params) => {
          return params.get('category');
        })
      ).subscribe(catId => {
        const token = localStorage.getItem('pdks-token');
        this.articlesService.getArticles(+catId, 10, token)
          .subscribe((aritcles: Article[]) =>
            this._articles = aritcles);
      });
  }

  get articles() {
    if (this._articles) {
      return this._articles.sort((a, b) => {
        if (a.creationDate > b.creationDate) {
          return -1;
        } else if (a.creationDate === b.creationDate) {
          return 0;
        } else {
          return 1;
        }
      });
    }
  }

  @Input() set articles(value: Article[]) {
    this._articles = value;
  }
}
