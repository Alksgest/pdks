import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../../common/model/article';
import { Category } from '../../../common/model/Category';
import { AuthToken } from '../../../common/model/authToken';
import { ArticleService } from '../../../common/services/article.service';
import { CategoryService } from '../../../common/services/category.service';

@Component({
  selector: 'pdks-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  public categories: Category[];

  public choosedCategories: Category[] = [];

  public article: Article;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.article = new Article();
    this.categories = history.state.data;
    if (this.categories === null || this.categories === undefined || this.categories.length === 0) {
      this.categoryService.getCategories()
      .subscribe((categories: Category[]) => this.categories = categories);
    }
  }

  categoryClick(category: Category) {
    this.choosedCategories.push(category);
  }

  removeCategory(category: Category) {
    const index = this.choosedCategories.indexOf(category);
    this.choosedCategories.splice(index, 1);
  }

  // article: Article
  createArticle() {
    const token = localStorage.getItem('pdks-token');
    const encodedToken: AuthToken = JSON.parse(atob(token));
    this.article.author = encodedToken.user;
    this.article.creationDate = new Date();
    this.article.category = this.choosedCategories[0];

    this.articleService.postArticle(token, this.article);

    // this.redirectToHome();
  }

  private redirectToHome() {
    this.router.navigate(['/']);
  }

}
