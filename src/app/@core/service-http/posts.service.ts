import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: AngularFirestore) { }

  getPosts(): Observable<any> {
    return this.firestore.collection('posts').snapshotChanges();
  }

  getPostId(postId: any): Observable<any> {
    return this.firestore.collection('posts').doc(postId).valueChanges()
  }

  getCommentsPostId(postId: any): Observable<any> {
    return this.firestore.collection('posts').doc(postId).collection('comentarios').valueChanges()
  }

  newPost(post: any): Promise<any> {
    return this.firestore.collection('posts').add(post)
  }

  editPost(postId: string, post: any) {
    this.firestore.doc('posts/' + postId).update(post);
  }

  editPostComment(postId: string, post: any): Promise<any> {
    return this.firestore.doc('posts/' + postId).collection('comentarios').add(post)
  }

  deletePost(postId: string): Promise<any> {
    return this.firestore.doc('posts/' + postId).delete()
  }
}
