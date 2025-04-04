import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  title = 'Hello Everyone';
  imageUrl =
    'https://th.bing.com/th/id/R.4497d0dcdcda12265350cbac6a399b93?rik=R4uXNrSYdLYsRg&riu=http%3a%2f%2fwww.spholidays.com%2fimages%2fdelhi-travel-packages.jpg&ehk=6b0lX2ySW00z3Oyz7BhLjJxSL7UG6ckxI3%2btZvDLB9I%3d&risl=&pid=ImgRaw&r=0';
  count = 0;
  name = '';
  isDisabled = false;
  color = 'blue';

  increment() {
    this.count++;
  }
}
