import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Blog } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit, OnDestroy {
  blogForm: FormGroup;
  id: number;
  blog: Blog;
  icon: string;
  action: string;
  editMode: boolean;
  subscription: Subscription;

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.blogForm = new FormGroup ({
      title: new FormControl(null, [Validators.required]),
      detail: new FormControl(null, [Validators.required]),
    }) 

    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.setMode();
      }
    )
  }

  setMode() {
    if (this.editMode) {
      this.action = 'Save';
      this.icon = 'fas fa-arrow-left';
      this.getBlog();
    } else {
      this.action = 'Post';
      this.icon = 'fas fa-times';
    }
  }

  setpatch() {
    this.blogForm.patchValue({
      title: this.blog.title,
      detail: this.blog.detail
    })
  }

  saveValue() {
    if (this.editMode) {
      this.blog.title = this.blogForm.value['title'];
      this.blog.detail = this.blogForm.value['detail'];
    } else {
      this.blog = new Blog(
        this.blogForm.value['title'],
        this.blogForm.value['detail'],
        new Date().toDateString(),
        new Date().getTime()
      )
    } 
  }

  previous() {
    let confirmFlag = true;
    if (this.blogForm.dirty === true) {
      confirmFlag = confirm('Do you want to discard your changes?')  
    }
    if (this.editMode && confirmFlag) {
      this.router.navigate(['view', this.id]);
    } else if (confirmFlag){
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.saveValue();
    this.editMode === true? this.updateBlog():this.saveBlog();
  }

  getBlog() {
    this.subscription = this.appService.getBlog(this.id).subscribe(
      (blog: Blog) => {
        this.blog = blog;
        this.setpatch();
      }
    )
  }

  saveBlog() {
    this.id = this.appService.blogLength;
    this.subscription = this.appService.saveBlog(this.blog).subscribe(
      (blog: Blog) => {
        this.router.navigate(['view', this.id])
      }
    )
  }

  updateBlog() {
    this.subscription = this.appService.updateBlog(this.id, this.blog).subscribe(
      (blog: Blog) => {
        this.router.navigate(['view', this.id])
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe
  }
}
