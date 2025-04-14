import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    const myob1 = new Observable<number>((obj) => obj.next(Math.random()));
    console.log('Observable');
    myob1.subscribe((i: any) => console.log('Value 1:', i));

    myob1.subscribe((i: any) => console.log('Value 2:', i));
    console.log('--------------------------------');

    //---------------------------Subjects-----------------------
    const mysub1 = new Subject();
    console.log('Subject');
    //mysub1.subscribe((i: any) => console.log(i));
    mysub1.next('Value 1: ' + Math.random());
    mysub1.next('Value 2: ' + Math.random());
    mysub1.subscribe((i: any) => console.log(i));
    // mysub1.next('Value 1: ' + Math.random());
    // mysub1.next('Value 2: ' + Math.random());
    console.log('--------------------------------');

    //-------------------------Behaviour Subject-------------------------
    const mysub2 = new BehaviorSubject<any>(7);
    console.log('Behaviour Subject');
    mysub2.subscribe((i: any) => console.log(i));
    mysub2.next('Value 1: ' + Math.random());
    mysub2.next('Value 2: ' + Math.random());
    mysub2.subscribe((i: any) => console.log(i));
    mysub2.next('Value 3: ' + Math.random());
    console.log('--------------------------------');

    //-------------------------Replay Subject-------------------------
    const mysub3 = new ReplaySubject(2);
    console.log('Replay Subject');
    mysub3.subscribe((i: any) => console.log(i));
    mysub3.next('Value 1: ' + Math.random());
    mysub3.next('Value 2: ' + Math.random());
    mysub3.next('Value 3: ' + Math.random());
    mysub3.subscribe((i: any) => console.log(i));
    console.log('--------------------------------');
  }
}
