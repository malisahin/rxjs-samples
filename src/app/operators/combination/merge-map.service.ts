import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MergeMapService {
  constructor() {
  }

  execute() {
    // this.sample1();
    this.sample2();
  }

  sample1() {
    const source = of(['1', '2', '3', '4']);

    const example = source.pipe(
      mergeMap(value => {
        console.log(`${value}`);
        return of(`Order:  ${value}`);
      })
    );

    const subscribe = example.subscribe(val => console.log(val));
  }

  sample2() {

    const getData = (param) => {
      return of(`retrieved new data with param ${param}`)
        .pipe(delay(1000));
    };

    from([1, 2, 3, 4]).pipe(
      map(param => getData(param))
    ).subscribe(value => value.subscribe(data => console.log(data)));

  }
}
