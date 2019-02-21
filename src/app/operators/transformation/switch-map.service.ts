import {Injectable} from '@angular/core';
import {interval, timer} from 'rxjs';
import {mapTo, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SwitchMapService {

  execute() {
    const source = timer(0, 5000);
    const example = source.pipe(
      switchMap(val => interval(3000).pipe(mapTo('Hello, I made it')))
    );
    example.subscribe(value => console.log);
  }
}
