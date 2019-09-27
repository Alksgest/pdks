import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    { id: 1, title: 'Контакти' },
    { id: 2, title: 'ПдКС' },
    { id: 3, title: 'ПодіїОсобистості' },
    { id: 4, title: 'Про масонство' },
    { id: 5, title: 'Статті' },
    { id: 6, title: 'Як стати масоном?' },
  ];

  constructor() { }


  getCategories() {
    return this.categories;
  }

  getCategory(id: number) {
    return this.categories.filter(c => c.id === id)[0];
  }
}
