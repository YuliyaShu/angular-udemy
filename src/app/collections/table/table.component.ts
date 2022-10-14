import { Component, OnInit, Input } from '@angular/core';
import { Headers } from 'src/app/shared/interfaces/Headers';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames = '';
  @Input() data: {[key: string]: string | number | boolean}[] = [];
  @Input() headers: Headers[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
