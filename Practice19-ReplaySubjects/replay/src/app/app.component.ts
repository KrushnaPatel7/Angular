import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users.subscribe((data) => {
      this.users = data;
      console.log('UserListComponent received data:', data);
    });
    this.userService.fetchUsers();

    setTimeout(() => {
      this.userService.users.subscribe((data) => {
        this.users = data;
        console.log('UserListComponent received data againnnnnn:', data);
      });
    }, 1000);
  }
}
