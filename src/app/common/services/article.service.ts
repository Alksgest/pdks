import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Article } from '../model/article';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    private url = environment.apiUrl + 'articles/';

    constructor(private http: HttpClient) {
    }

    private createOptions(token: string) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token === null ? 'no-token' : token
            })
        };
    }

    getArticle(id: number, token: string): Observable<Article> {
        const url = this.url + id;

        const httpOptions = this.createOptions(token);

        return this.http.get<Article>(url, httpOptions);
    }

    getArticles(categoryId: number, count: number, token: string): Observable<Article[]> {
        const httpOptions = this.createOptions(token);

        return this.http.get<Article[]>(this.url, httpOptions);
    }

    postArticle(token: string, article: Article) {

        const httpOptions = this.createOptions(token);

        return this.http.post<Article>(this.url, article, httpOptions);
    }
}
