import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/app.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: Blog;
  @Input() id: number;
  currDate = new Date().toDateString();
  currTime = new Date().getTime();
  time;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.blog != null) {
      this.getDate();
    }
  }

  getDate() {
    if (this.currDate === this.blog.date) {
      this.time = Math.round(((this.currTime - this.blog.timestamp)% 86400000) / 3600000);
      this.getHours();
    } else {
      this.time = this.blog.date;
    }
  }

  getHours() {
    if (this.time === 0) {
      this.time = Math.round((((this.currTime - this.blog.timestamp)% 86400000) % 3600000) / 60000);
      this.getMin();
    } else {
      this.time = 'About ' + this.time + ' hours ago'
    }
  }

  getMin() {
    if (this.time === 0) {
      this.time = 'Just Now'
    } else {
      this.time = 'About ' + this.time + ' mins ago'
    }
  }

}
