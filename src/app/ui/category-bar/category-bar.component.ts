import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../common/model/Category';
import { CategoryService } from '../../common/services/category.service';

@Component({
  selector: 'pdks-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent {

  @Input() categories: Category[];

  constructor() { }

}
