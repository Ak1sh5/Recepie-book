// src/app/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/services/task.model';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
