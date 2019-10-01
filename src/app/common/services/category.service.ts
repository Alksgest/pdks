import { Injectable } from '@angular/core';
import { Category } from 'src/app/common/models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(environment.apiUrl + 'categories/');
  }

  getCategory(id: string) {
    return this.http.get<Category>(environment.apiUrl + 'categories/' + id);
  }
}
