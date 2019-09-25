import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialComponentsModule } from './material-component/material-components.module';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { FooterComponent } from './footer/footer.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ArticleService } from './common/services/article.service';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            HeaderComponent,
            CategoryBarComponent,
            LoginBarComponent,
            LoginFormComponent,
            HomeComponent,
            ArticlesComponent,
            FooterComponent,
            SingleArticleComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            MaterialComponentsModule,
            BrowserAnimationsModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'article/:id', component: SingleArticleComponent },
                { path: 'articles/', component: HomeComponent },
                { path: '**', component: HomeComponent }
            ])
        ],
        providers: [
            ArticleService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map