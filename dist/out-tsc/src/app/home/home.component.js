import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(service, activatedRoute) {
        this.service = service;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const id = this.activatedRoute.queryParams.subscribe((params) => {
            // tslint:disable-next-line: no-string-literal
            return params['category'];
        });
        this.articles = this.service.getArticles(+id);
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map