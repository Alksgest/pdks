import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    { id: 1, title: 'Контакти', link: '#' },
    { id: 2, title: 'ПдКС', link: '#' },
    { id: 3, title: 'Події/Особистості', link: '#', },
    { id: 4, title: 'Про масонство', link: '#', },
    { id: 5, title: 'Статті', link: '#' },
    { id: 6, title: 'Як стати масоном?', link: '#' },
  ];

  constructor() { }


  getCategories() {
    return this.categories;
  }

  getCategory(id: number) {
    return this.categories.filter(c => c.id === id)[0];
  }
}
