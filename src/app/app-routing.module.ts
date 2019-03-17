import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: BlogListComponent},
  { path: 'view/:id', component: BlogDetailComponent},
  { path: 'edit/:id', component: BlogEditComponent},
  { path: 'new', component: BlogEditComponent},
  { path: '**', component: ErrorComponent, data: {message: '404 Page Not Found'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
