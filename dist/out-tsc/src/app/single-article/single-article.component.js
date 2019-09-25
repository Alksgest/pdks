import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SingleArticleComponent = class SingleArticleComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.article = this.service.getArticle(+id);
    }
};
tslib_1.__decorate([
    Input()
], SingleArticleComponent.prototype, "article", void 0);
SingleArticleComponent = tslib_1.__decorate([
    Component({
        selector: 'app-single-article',
        templateUrl: './single-article.component.html',
        styleUrls: ['./single-article.component.css']
    })
], SingleArticleComponent);
export { SingleArticleComponent };
//# sourceMappingURL=single-article.component.js.map