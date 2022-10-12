import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imgUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw',
    },
    {
      title: 'Mountain',
      imgUrl: 'assets/mountain.jpeg',
      username: 'nature',
      content: 'I saw',
    },
    {
      title: 'Bike',
      imgUrl: 'assets/biking.jpeg',
      username: 'nature',
      content: 'I saw',
    },
    {
      title: 'Bike',
      imgUrl: 'assets/biking.jpeg',
      username: 'nature',
      content: 'I saw',
    },
  ]
}
