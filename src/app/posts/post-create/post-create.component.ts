import { Post } from './../post.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
    enteredTitle = "";
    enteredContent = "";
    @Output() postCreated = new EventEmitter<Post>();

    onAddPost(){
        const post: Post = {
            title: this.enteredTitle, 
            content: this.enteredContent
        };
        this.postCreated.emit(post);
    }
}