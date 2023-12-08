import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  taskTitle = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.taskTitle.trim() !== '') {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }

}
