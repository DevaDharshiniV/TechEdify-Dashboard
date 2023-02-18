
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
// import { Firestore } from 'firebase/compat/firestore';


@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css'],
  providers: [DatePipe]
})
export class AllPostComponent implements OnInit {

  postArray: { id: string, data: Post }[] = [];

  constructor(
    private postservice: PostsService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.postservice.loadData().subscribe(val => {
      console.log(val);
      this.postArray = val.map(post => {
        const timestamp = post.data.createdAt as unknown as firebase.firestore.Timestamp;
        return {
          id: post.id,
          data: {
            ...post.data,
            category: {
              categoryId: post.data.category.categoryId,
              category: post.data.category.category
            },
            createdAt: new Date(timestamp.seconds * 1000)
          }
        };
      });
    });
  }
  onDelete(postImgPath: any,id:any){
    this.postservice.deleteImage(postImgPath,id);
  }

  onFeatured(id:any,value: any){
    const featuredData ={
      isFeatured: value

    }
    this.postservice.markFeatured(id,featuredData);
  }

}


