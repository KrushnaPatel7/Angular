import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users = this.usersSubject;

  constructor(private http: HttpClient) {}

  fetchUsers() {
    console.log('API call triggered');
    this.http
      .get<any>('https://api.slingacademy.com/v1/sample-data/users?limit=10')
      .subscribe((response) => {
        console.log('Data received from API:', response);
        this.usersSubject.next(response.users);
      });
  }
}
