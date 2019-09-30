import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../common/services/article.service';
import { CategoryService } from '../common/services/category.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _articles: Article[] = [];

  constructor(
    private router: Router,
    private articlesService: ArticleService,
    private catService: CategoryService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParamMap
    .pipe(
      map((params) => {
        return params.get('category');
      })
    ).subscribe(catId => {
      this.articlesService.getArticles(catId)
        .subscribe(aritcles =>
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
