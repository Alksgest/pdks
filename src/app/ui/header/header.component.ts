import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../common/model/Category';

@Component({
  selector: 'pdks-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username: string;

  @Input() categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
