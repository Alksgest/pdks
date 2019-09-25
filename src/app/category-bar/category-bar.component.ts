import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../common/services/category.service';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {


  // <!-- <a class="nav-link" routerLink="/followers" [queryParams]="{page: 1, order: 'newest'}">Followers</a> -->

  header = 'Категорії';
  // temp categories
  categories: Category[];
  constructor(private catService: CategoryService) { }

  ngOnInit() {
    this.categories = this.catService.getCategories();
  }

}
