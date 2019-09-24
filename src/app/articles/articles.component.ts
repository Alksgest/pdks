import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../common/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private service: ArticleService) { }

  ngOnInit() {
    this.articles = this.service.getArticles();
  }

}
