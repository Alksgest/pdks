import { TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';
describe('ArticleService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ArticleService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=article.service.spec.js.map