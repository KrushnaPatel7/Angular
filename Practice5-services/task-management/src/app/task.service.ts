import { Injectable } from '@angular/core';
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];
  nextId: number = 1;

  constructor() {
    this.loadlistdata();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    task.id = this.nextId++;
    this.tasks.push(task);
    this.savelistData();
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.savelistData();
  }
  savelistData() {
    localStorage.setItem('task', JSON.stringify(this.tasks));
  }
  loadlistdata() {
    const storedtask = localStorage.getItem('task');
    if (storedtask) {
      this.tasks = JSON.parse(storedtask);
    }
  }
  clearAllTask() {
    this.tasks = [];
    localStorage.removeItem('task');
  }
}
