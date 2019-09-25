import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateArticleComponent } from './create-article/create-article.component';


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
      { path: 'article/:id', component: SingleArticleComponent },
      { path: 'articles', component: HomeComponent },
      { path: 'create-article', component: CreateArticleComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
