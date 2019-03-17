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

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogEditComponent,
    BlogItemComponent,
    BlogDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
