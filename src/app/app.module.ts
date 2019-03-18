import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogItemComponent } from './blog-list/blog-item/blog-item.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AppService } from './app.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogEditComponent,
    BlogItemComponent,
    BlogDetailComponent,
    ErrorComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
