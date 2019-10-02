import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../common/services/category.service';
import { Category } from '../common/models/category';
import { Article } from '../common/models/article';
import { ArticleService } from '../common/services/article.service';
import { Router } from '@angular/router';
import { AuthToken } from '../common/models/auth-token';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _categories: Category[];
  // tslint:disable-next-line: variable-name
  private _choosedCategories: Category[] = [];

  // tslint:disable-next-line: variable-name
  private _article: Article =
    {
      id: null,
      author: null,
      category: null,
      content: null,
      creationDate: null,
      title: null
    };

  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(cats => {
        this._categories = cats;
      });
  }

  get categories() {
    return this._categories;
  }

  get choosedCategories() {
    return this._choosedCategories;
  }

  get article() {
    return this._article;
  }

  categoryClick(category: Category) {
    this._choosedCategories.push(category);
  }

  removeCategory(category: Category) {
    const index = this._choosedCategories.indexOf(category);
    this._choosedCategories.splice(index, 1);
  }

  // article: Article
  createArticle() {
    const tkn: AuthToken = JSON.parse(localStorage.getItem('pdks-token'));
    this._article.author = tkn.user;
    this._article.creationDate = new Date();
    this._article.category = this.choosedCategories[0];

    this.articleService.addArticle({ article: this._article, token: tkn });

    this.redirectToHome();
  }

  private redirectToHome() {
    this.router.navigate(['/']);
  }

}
