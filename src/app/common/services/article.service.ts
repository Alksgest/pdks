import { Injectable, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [];

  constructor(private http: HttpClient) {
  }

  getArticles(categoryId?: string) {
    if (!categoryId) {
      return this.http.get<Article[]>('https://localhost:44387/api/articles');
    } else {
      return this.http.get<Article[]>('https://localhost:44387/api/articles/category/' + categoryId);
    }
  }

  getArticle(id: string) {
    return this.http.get<Article>('https://localhost:44387/api/articles/' + id);
  }

  addArticle(article: Article) {
    const valueToSend = JSON.stringify(article);
    this.http.post<Article>('https://localhost:44387/api/articles/', article).subscribe((r) => console.log(r));
  }

  private getMaxId() {
    let max = 0;
    for (const article of this.articles) {
      max = article.id > max ? article.id : max;
    }
    return max;
  }
}
