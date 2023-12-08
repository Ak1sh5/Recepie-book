import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  constructor(private route:Router){}
goback() {
  this.route.navigate(['/home']);
}

}
