// card.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  data: any;

  constructor(private dataService: ApiService) {}

  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      this.data = data;
    });
  }

  getObjectValues(obj: any): any[] {
    return Object.values(obj);
  }
}
