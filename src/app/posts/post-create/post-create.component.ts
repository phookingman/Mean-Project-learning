import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:  ['./post-create.component.css']
})
export class PostCreateComponent{

  enteredValue ='';
  newPost = 'No Content';

  onAddPost(){
   // alert('Post Added');
    this.newPost = this.enteredValue;
  }

}
