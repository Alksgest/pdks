
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HeaderComponent } from './ui/header/header.component';
import { CategoryBarComponent } from './ui/category-bar/category-bar.component';
import { LoginBarComponent } from './ui/login/login-bar/login-bar.component';
import { LoginFormComponent } from './ui/login/login-form/login-form.component';
import { MaterialComponentsModule } from './material-component/material-components.module';
import { HomeComponent } from './ui/home/home.component';
import { ArticlesComponent } from './ui/article/articles/articles.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SingleArticleComponent } from './ui/article/single-article/single-article.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { CreateArticleComponent } from './ui/article/create-article/create-article.component';
import { AuthorizationService } from './common/services/authorization.service';
import { AuthGuard } from './common/guards/auth-guard.service';
import { CategoryService } from './common/services/category.service';
import { ArticleService } from './common/services/article.service';


@NgModule({
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
    SingleArticleComponent,
    NotFoundComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'articles', component: HomeComponent },
      { path: 'articles/:id', component: SingleArticleComponent },
      { path: 'create-article', component: CreateArticleComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginFormComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    AuthorizationService,
    CategoryService,
    ArticleService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
