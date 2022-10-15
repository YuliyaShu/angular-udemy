import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input() items: {
    image: string,
    title: string,
    description: string,
  }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
