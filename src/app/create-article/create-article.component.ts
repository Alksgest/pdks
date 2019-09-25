import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../common/services/category.service';
import { Category } from '../models/category';
import { Article } from '../models/article';
import { ArticleService } from '../common/services/article.service';

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

  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this._categories = this.categoryService.getCategories();
  }

  get categories() {
    return this._categories;
  }

  get choosedCategories() {
    return this._choosedCategories;
  }

  categoryClick(category: Category) {
    this._choosedCategories.push(category);
  }

  removeCategory(category: Category) {
    const index = this._choosedCategories.indexOf(category);
    this._choosedCategories.splice(index, 1);
  }

  createArticle(article: Article) {
    article.author = 'admin';
    article.dateTime = new Date();
    article.categories = this.choosedCategories;

    this.articleService.addArticle(article);
  }

}
