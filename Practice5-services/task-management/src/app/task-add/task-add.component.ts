import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css'],
})
export class TaskAddComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = { id: 0, title: '', description: '', completed: false };
    }
  }
}
