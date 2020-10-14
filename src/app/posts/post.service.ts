import { Post } from './post.model';
import { Subject } from 'rxjs';


//to make Angular aware of this Service you can add also : @Injectable({providedIn: 'root})
export class PostsService {
  private posts: Post[] =[];
  private postsUpdated = new Subject<Post[]>();

  getPosts(){
    return [...this.posts];//spred operetor, array is copied
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPost(title:string, content:string){
    const post: Post = {title:title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
