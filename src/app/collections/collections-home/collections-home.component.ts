import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: {[key: string]: string | number | boolean}[] = [
    { name: 'James', age: 24, job: 'Designer', hired: true },
    { name: 'Jill', age: 26, job: 'Engineer', hired: false },
    { name: 'El', age: 25, job: 'Engineer', hired: true },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'hired', label: 'Is hired?'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
