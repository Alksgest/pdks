import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _articles: Article[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @Input() get articles() {
    return this._articles.sort((a, b) => {
      if (a.dateTime > b.dateTime) {
        return -1;
      } else if (a.dateTime === b.dateTime) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  set articles(value: Article[]) {
    this._articles = value;
  }

  route(articleId: string) {
    if (this._articles.length <= +articleId) {
      this.router.navigate(['/not-found']);
    } else {
      this.router.navigate(['/article' + '/' + articleId]);
    }
  }

}
