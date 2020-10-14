import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

import {Subscription} from 'rxjs';

@Component({
    selector : 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  postsService: PostsService;

  private postsSub: Subscription;
  ngOnInit(){
   this.posts = this.postsService.getPosts();
   this.postsSub = this.postsService.getPostUpdateListener()
   .subscribe((posts: Post[]) =>{
      this.posts = posts;
   });
} ngOnDestroy(){
    this.postsSub.unsubscribe;}

 constructor(postService: PostsService) {
   this.postsService = postService;



  } // if adding "public" on frint of postservice in constructor paranthesis will get the same result
}

