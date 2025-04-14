import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, of, takeUntil, catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  private destroy = new Subject<void>();
  emittedValues: any[] = [];
  errorMessage: string = '';

  //------------------------------takeUntil&catchError-------------------------------------

  takeUntil() {
    const valuesArray = [1, 2, 3, 4, 5];
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
        takeUntil(this.destroy),
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
        error: () => {},
        complete: () => {},
      });
  }
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
  
  

}
