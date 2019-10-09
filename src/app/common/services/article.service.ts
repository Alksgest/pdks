import { Injectable, OnInit } from '@angular/core';
import { Article } from 'src/app/common/models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [];

  constructor(private http: HttpClient) {
  }

  getArticles(categoryId?: string) {
    const t = localStorage.getItem('pdks-token');
    if (!categoryId) {
      return this.http.get<Article[]>(environment.apiUrl + 'articles/', { params: { token: t } });
    } else {
      return this.http.get<Article[]>(environment.apiUrl + 'articles/category/' + categoryId, { params: { token: t } });
    }
  }

  getArticle(id: string) {
    return this.http.get<Article>(environment.apiUrl + 'articles/' + id);
  }

  // addArticle(article: Article) {
  addArticle(data: any) {
    this.http.post<Article>(environment.apiUrl + 'articles/', data).subscribe((r) => console.log(r));
  }

  private getMaxId() {
    let max = 0;
    for (const article of this.articles) {
      max = article.id > max ? article.id : max;
    }
    return max;
  }
}
