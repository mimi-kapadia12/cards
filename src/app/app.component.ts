import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Neat Tree',
      imageURL: 'assets/tree.jpeg',
      content: 'I saw a neat tree today.',
      userName: 'nature'
    },
    {
      title: 'Snowy Mountain',
      imageURL: 'assets/mountain.jpeg',
      content: 'Here is the picture of snowy mountain.',
      userName: 'mountainlover'
    },
    {
      title: 'Mountain biking',
      imageURL: 'assets/biking.jpeg',
      content: 'I did some biking today.',
      userName: 'biking1289'
    },
    {
      title: 'Snowy Mountain',
      imageURL: 'assets/mountain.jpeg',
      content: 'Here is the picture of snowy mountain.',
      userName: 'mountainlover'
    }
  ]
}
