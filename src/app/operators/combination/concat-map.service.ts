import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConcatMapService {
  constructor() {}

  execute() {
    //emit delay value
    const source = of(2000, 1000);

    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
      concatMap(val => {
        console.log(`Delayed by: ${val}`);
        return of(`Delayed by: ${val}`).pipe(delay(val));
      }),
    );

    // output:  with concatmap delayed by 2000ms
    //          with concatmap delayed by 1000ms
    const subscribe = example.subscribe(value => {
      console.log(`With ConcatMap ${value}`);
    });
  }
}
