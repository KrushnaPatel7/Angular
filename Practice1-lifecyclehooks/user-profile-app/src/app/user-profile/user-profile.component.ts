// user-profile.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnChanges {
  @Input() user!: { name: string; age: number; bio: string };
  contentInitialized: boolean = false;
  viewInitialized: boolean = false;
  timer: any;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      console.log('User data :', changes['user'].currentValue);
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit: UserProfileComponent initialized');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: called');

    if (this.user && this.user.age > 60) {
      console.log('Employee is over 60 years old');
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: called');
    this.contentInitialized = true;
    console.log('Content Initialized:', this.contentInitialized);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: called');

    if (this.user && this.user.age > 60) {
      console.log('Employee is over 60 years old');
    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit : called');
    this.viewInitialized = true;
    console.log('View Initialized:', this.viewInitialized);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    console.log('Current user name in the view:', this.user.name);
  }
}
