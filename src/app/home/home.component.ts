import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../common/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../common/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  catId: number;

  constructor(
    private service: ArticleService,
    private activatedRoute: ActivatedRoute,
    private catService: CategoryService) { }

}
