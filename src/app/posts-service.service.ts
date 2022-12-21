import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  private url='https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) {

   }
   getPosts(){
    return this.http.get(this.url)
   }
   deletePosts(id:any){
    return this.http.delete(this.url+'/'+id);
   }
    

   createPosts(post:any){

    return this.http.post(this.url,post);

   }
   updatePosts(post:HTMLInputElement){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({title:'update'}));
   }
}
