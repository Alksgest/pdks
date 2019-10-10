import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, ArticleService, Category, Article } from 'src/contract';
import { AuthToken } from 'src/contract/model/authToken';

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
    const encoded = localStorage.getItem('pdks-token');
    const token: AuthToken = JSON.parse(atob(encoded));
    this._article.author = token.user;
    this._article.creationDate = new Date();
    this._article.category = this.choosedCategories[0];

    this.articleService.postArticle(encoded, this._article);

    this.redirectToHome();
  }

  private redirectToHome() {
    this.router.navigate(['/']);
  }

}
