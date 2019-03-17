import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Blog } from './app.model';

@Injectable()
export class AppService{
    blogLength: number;
    blogsUrl: string = 'https://ng-http-9356b.firebaseio.com/blog.json';
    blogUrl: string = 'https://ng-http-9356b.firebaseio.com/blog/';

    constructor( private httpClient: HttpClient, private router: Router) {}

    getBlogs() {
        return this.httpClient.get<Blog[]>(this.blogsUrl)
        .pipe(map(
            (blogs: Blog[]) => {
                this.blogLength = blogs.length
                return blogs
            }
        ))
    }

    getBlog(id: number) {
        return this.httpClient.get<Blog>(this.blogUrl+id+'.json')
        .pipe(map(
            (blog: Blog) => {
                return blog
            }
        ))
    }

    updateBlog(id: number, updatedBlog: Blog) {
        return this.httpClient.put<Blog>(this.blogUrl+id+'.json',updatedBlog)
    }

    saveBlog(newBlog: Blog) {
        return this.httpClient.put(this.blogUrl+this.blogLength+'.json',newBlog)
    }

    deleteBlog(id: number) {
        return this.httpClient.delete(this.blogUrl+id+'.json')
    }

}