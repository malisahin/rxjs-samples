import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CombineAllService {
  constructor() {}

  execute() {
    const source = interval(1000).pipe(take(2));

    source
      .pipe(
        map(val =>
          interval(1000).pipe(
            map(i => `Result (${val}): ${i}`),
            take(5),
          ),
        ),
      )
      .subscribe(val => console.log(val));
  }
}
