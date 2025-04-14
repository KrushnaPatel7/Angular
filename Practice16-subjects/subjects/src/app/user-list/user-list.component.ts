import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users.subscribe((data) => {
      console.log('UserListComponent subscribed to usersSubject');
      this.users = data;
      console.log('UserListComponent received data:', data);
    });
    this.userService.fetchUsers();

    setTimeout(() => {
      this.userService.users.subscribe((data) => {
        console.log('UserListComponent againnnnn subscribed to usersSubject');
        this.users = data;
        console.log('UserListComponent received data againnnn:', data);
      });
    }, 1000);
    //this.userService.fetchUsers();
  }
}
