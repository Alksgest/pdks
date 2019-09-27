import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    { categoryId: 1, title: 'Контакти' },
    { categoryId: 2, title: 'ПдКС' },
    { categoryId: 3, title: 'Події/Особистості' },
    { categoryId: 4, title: 'Про масонство' },
    { categoryId: 5, title: 'Статті' },
    { categoryId: 6, title: 'Як стати масоном?' },
  ];

  constructor() { }


  getCategories() {
    return this.categories;
  }

  getCategory(id: number) {
    return this.categories.filter(c => c.categoryId === id)[0];
  }
}
