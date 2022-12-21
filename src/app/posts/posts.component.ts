import { Component, Input, OnInit } from '@angular/core';
import { PostsServiceService } from '../posts-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
 posts:any;
 post:any;
  constructor(private service:PostsServiceService) { 

  }
deletePost(post:any){
  this.service.deletePosts(post.id)
  .subscribe(response=>{
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
    })
    
  
    
    }
    createpost(input:HTMLInputElement){

    let newPost={title:input.value,id:0}
    this.service.createPosts(input.value)
      .subscribe(response=>{
        this.post=response;
        
        newPost.id=this.post.id;
        console.log(response);
        this.posts.splice(0,0,newPost);
    })
    }
    updatePost(posts:HTMLInputElement){
      this.service.updatePosts(posts)
      .subscribe(Response=>{console.log(Response)
      })
    }
  ngOnInit(): void {
    this.service.getPosts()
    .subscribe((response)=>{this.posts=response})
  }


}
