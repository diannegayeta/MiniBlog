import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ErrorComponent } from './error/error.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: BlogListComponent},
  { path: 'view/:id', component: BlogDetailComponent},
  { path: 'edit/:id', component: BlogEditComponent, canActivate:[AuthGuard]},
  { path: 'new', component: BlogEditComponent, canActivate:[AuthGuard]},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: ErrorComponent, data: {message: '404 Page Not Found'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
