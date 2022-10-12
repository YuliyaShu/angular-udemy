import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 2 ;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60;'
    },
    {
      title: 'Sun',
      url: 'https://images.unsplash.com/photo-1511836536898-6d6f1b8f6948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60;'
    },
    {
      title: 'Good',
      url: 'https://images.unsplash.com/photo-1543768598-2c37a04a863b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60;'
    }
  ]
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 2;
  }
}
