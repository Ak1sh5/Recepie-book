// card.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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
  
      // Perform image search using the recipe title
      this.apiService.searchImage(recipeTitle).subscribe(
        imageResult => {
          this.imageData = imageResult;
          console.log(this.imageData);
        },
        error => {
          console.error(error);
        }
      );
    }
  }