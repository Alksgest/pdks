import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // private categories: Category[] = [
  //   { id: 1, title: 'Контакти' },
  //   { id: 2, title: 'ПдКС' },
  //   { id: 3, title: 'Події/Особистості' },
  //   { id: 4, title: 'Про масонство' },
  //   { id: 5, title: 'Статті' },
  //   { id: 6, title: 'Як стати масоном?' },
  // ];

  constructor(private http: HttpClient) { }


  getCategories() {
    return this.http.get<Category[]>(environment.apiUrl + 'categories/');
  }

  getCategory(id: string) {
    return this.http.get<Category>(environment.apiUrl + 'categories/' + id);
  }
}
