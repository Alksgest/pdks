import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArticleService, CategoryService, Article } from 'src/contract';
import { AuthToken } from 'src/app/common/model/authToken';

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
