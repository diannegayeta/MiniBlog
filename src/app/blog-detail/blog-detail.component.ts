import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../app.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  id: number;
  blog: Blog;
  subscription: Subscription;

  constructor(private appService: AppService, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getBlog();
      }
    )
  }

  getBlog() {
    this.subscription = this.appService.getBlog(this.id).subscribe(
      (blog: Blog) => {
        this.blog = blog;
      }
    )
  }

  onUpdate() {
    this.router.navigate(['edit',this.id]);
  }

  onDelete() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/signin']);
    } else if (confirm('Do you want to delete this article?')) {
      this.appService.deleteBlog(this.id).subscribe(
        (blog: Blog) => {
          this.router.navigate(['/']);
        }
      )
    }    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
