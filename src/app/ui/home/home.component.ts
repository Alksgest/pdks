import { Component, OnInit, Input } from '@angular/core';

import { Category } from 'src/app/common/model/Category';
import { CategoryService } from '../../common/services/category.service';
import { AuthorizationService } from '../../common/services/authorization.service';

@Component({
  selector: 'pdks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories: Category[];

  constructor(
    private authService: AuthorizationService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe((categories: Category[]) => this.categories = categories);
  }


  get isAuthorized() {
    return this.authService.isAuthorized;
  }

}
