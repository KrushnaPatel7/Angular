import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, merge, of, mergeMap, delay } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  dataArray: number[] = [];
  dataArraymerge: any[] = [];
  data: number[] = [1, 2, 3, 4, 5];
  private subscription!: Subscription;
  arr: any[] = [];

  startObservable() {
    const observable = new Observable<number>((observer) => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < this.data.length) {
          observer.next(this.data[index]);
          index++;
        } else {
          clearInterval(intervalId);
          observer.complete();
        }
      }, 1000);
    });

    this.subscription = observable.subscribe({
      next: (value) => {
        this.dataArray.push(value);
      },
      complete: () => {
        console.log('All data emitted!');
      },
    });
  }
  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      console.log('Observable unsubscribed in ngOnDestroy!');
    }
  }

  //----------------------------------merge----------------------------------------------
  useMerge() {
    const obs1 = of(1, 2, 3, 4);
    const obs2 = of('A', 'B', 'C', 'd', 'e');

    this.subscription = merge(obs1, obs2).subscribe({
      next: (val) => {
        this.dataArraymerge.push(val);
      },
      complete: () => {
        console.log('merge complete');
      },
    });
  }

  //----------------------------------------mergeMap------------------------------------------
  useMergemap() {
    const sourceObservable = of(10, 30, 30, 40, 20);

    this.subscription = sourceObservable
      .pipe(mergeMap((value) => this.createInnerob(value)))
      .subscribe({
        next: (val: any) => {
          this.arr.push(val);
        },
        complete: () => {
          console.log('MergeMap completed!');
        },
      });
  }

  createInnerob(value: number): Observable<string> {
    return of(`Processed value: ${value}`);
  }
}
