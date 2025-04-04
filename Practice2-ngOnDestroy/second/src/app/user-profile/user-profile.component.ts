import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private timer: any;

  ngOnInit(): void {
    console.log('UserProfileComponent initialized');
    this.timer = setInterval(() => {
      console.log('Timer is running...');
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('UserProfileComponent destroyed');
    clearInterval(this.timer);
    console.log('Timer cleared');
  }
}
