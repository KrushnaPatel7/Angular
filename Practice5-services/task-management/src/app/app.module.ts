import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskAddComponent],
  imports: [BrowserModule, FormsModule], 
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
