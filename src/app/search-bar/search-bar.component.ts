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
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      query: ['']
    });
  }

  onSearch(): void {
    const query = this.searchForm.get('query')?.value;
    this.searchEvent.emit(query);
  }
}
  