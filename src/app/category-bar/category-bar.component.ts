import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {

  header = 'Категорії';
  // temp categories
  categories: Category[] = [
    { id: 1, title: 'Контакти', link: '#' },
    { id: 2, title: 'ПдКС', link: '#' },
    { id: 2, title: 'Події/Особистості', link: '#' },
    { id: 2, title: 'Про масонство', link: '#' },
    { id: 2, title: 'Статті', link: '#' },
    { id: 2, title: 'Як стати масоном?', link: '#' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
