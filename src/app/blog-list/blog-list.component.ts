import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[];
  subscription: Subscription;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.subscription = this.appService.getBlogs().subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    )
  }   

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
