import { Component, OnInit, Input } from '@angular/core';
import { AuthToken } from '../common/models/auth-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username: string = null;

  constructor() { }

  ngOnInit() {
  }

}
