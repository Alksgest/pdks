import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleService, Article } from 'src/contract';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  // @Input()
  article: Article;

  constructor(
    private service: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const token = localStorage.getItem('pdks-token');

    this.service.getArticle(id, token)
      .subscribe((article: Article) => {
        this.article = article;
      },
        (error: any) => {
          console.log(error);
        });
  }
}
