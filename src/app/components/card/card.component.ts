// card.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
  export class CardComponent implements OnInit {
    @Input() recipeData: any;
    imageData: any;
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit() {
      // Assuming you have the recipe title in the recipeData object
      const recipeTitle = this.recipeData?.title;
      console.log(recipeTitle);
      // Perform image search using the recipe title
     
    }
  }