import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent{

  enteredValue ='';
  newPost = 'No Content';

  onAddPost(postInput:HTMLTextAreaElement){
   // alert('Post Added');
    this.newPost = this.enteredValue;
  }

}
