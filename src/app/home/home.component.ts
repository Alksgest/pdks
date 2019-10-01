import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../common/services/article.service';
import { Article } from '../common/models/article';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CategoryService } from '../common/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  catId: number;

  constructor(
    private service: ArticleService,
    private activatedRoute: ActivatedRoute,
    private catService: CategoryService) { }

  ngOnInit() {

  }

}
