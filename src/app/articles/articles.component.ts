import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _articles: Article[];

  constructor() { }

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

}
