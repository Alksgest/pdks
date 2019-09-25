import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../common/services/article.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  @Input() article: Article;

  constructor(
    private service: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.article = this.service.getArticle(+id);
    if (this.article === undefined) {
      this.router.navigate(['/not-found']);
    }
  }

}
