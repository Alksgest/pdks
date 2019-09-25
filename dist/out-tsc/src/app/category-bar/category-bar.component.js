import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CategoryBarComponent = class CategoryBarComponent {
    constructor() {
        // <!-- <a class="nav-link" routerLink="/followers" [queryParams]="{page: 1, order: 'newest'}">Followers</a> -->
        this.header = 'Категорії';
        // temp categories
        this.categories = [
            { id: 1, title: 'Контакти', link: '#' },
            { id: 2, title: 'ПдКС', link: '#' },
            { id: 3, title: 'Події/Особистості', link: '#', },
            { id: 4, title: 'Про масонство', link: '#', },
            { id: 5, title: 'Статті', link: '#' },
            { id: 6, title: 'Як стати масоном?', link: '#' },
        ];
    }
    ngOnInit() {
    }
};
CategoryBarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-category-bar',
        templateUrl: './category-bar.component.html',
        styleUrls: ['./category-bar.component.css']
    })
], CategoryBarComponent);
export { CategoryBarComponent };
//# sourceMappingURL=category-bar.component.js.map