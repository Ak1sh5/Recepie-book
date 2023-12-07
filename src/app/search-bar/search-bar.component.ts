// search-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../home/dataSercice';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchForm!: FormGroup;
  @Output() search = new EventEmitter<string>();

  constructor(private fb: FormBuilder,private dataService: DataService) {
    this.searchForm = this.fb.group({
      recepie: ['']
    });
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      recepie: [''] // Initialize with an empty string or any default value
    });
  }

  onSearch(query: string): void {
    this.dataService.searchRecipes(query);
    this.search.emit(query);
  }
  
}