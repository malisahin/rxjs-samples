import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MergeMapService {
  constructor() {}

  execute() {
    const source = of(['1', '2', '3', '4']);

    const example = source.pipe(
      mergeMap(value => {
        console.log(`${value}`);
        return of(`Order:  ${value}`);
      }),
    );

    const subscribe = example.subscribe(val => console.log(val));
  }
}
