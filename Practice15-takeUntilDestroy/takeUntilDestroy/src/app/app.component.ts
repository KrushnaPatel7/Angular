import { Component, DestroyRef, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  emittedValues: any[] = [];
  errorMessage: string = '';

  ngOnInit() {
    this.startObservable();
  }
  constructor(private destroy: DestroyRef) {}
  startObservable() {
    const valuesArray = [1, 2, 3, 3, 4, 3, 5];
    let index = 0;

    const arrayObservable = new Observable((observer) => {
      const intervalId = setInterval(() => {
        if (index < valuesArray.length) {
          observer.next(valuesArray[index]);
          index++;
        } else {
          clearInterval(intervalId);
          observer.complete();
        }
      }, 1000);
    });

    arrayObservable
      .pipe(
        takeUntilDestroyed(this.destroy),
        distinctUntilChanged(),
        catchError((err) => {
          this.errorMessage = 'An error occurred!';
          console.error(err);
          return of([]);
        })
      )
      .subscribe({
        next: (value) => {
          this.emittedValues.push(value);
          console.log(value);
        },
        complete: () => {
          console.log('Observable completed and unsubscribed');
        },
      });
  }
}
