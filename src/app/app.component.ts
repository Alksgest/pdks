import { Component, OnInit } from '@angular/core';

import { Category } from './common/model/Category';
import { AuthorizationService } from './common/services/authorization.service';
import { CategoryService } from './common/services/category.service';

@Component({
  selector: 'pdks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public categories: Category[];

  constructor(
    private service: AuthorizationService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.service.invalidateOnStart();
    this.categoryService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  get username() {
    if (this.service.currentUser !== null) {
      return this.service.currentUser.username;
    }
    return null;
  }
}
