import {Injectable} from '@angular/core';
import {forkJoin, Subject, zip} from 'rxjs';


type Color = 'white' | 'green' | 'red' | 'blue';
type Logo = 'fish' | 'dog' | 'bird' | 'cow';

@Injectable({
  providedIn: 'root'
})
export class ForkjoinService {


  execute() {
    console.log('ForkjoinService ');
    const color$ = new Subject<Color>();
    const logo$ = new Subject<Logo>();

    color$.next('white');
    logo$.next('fish');

    color$.next('green');
    logo$.next('dog');

    color$.next('red');
    logo$.next('bird');

    color$.next('blue');
    logo$.next('cow');

    forkJoin(color$, logo$)
      .subscribe(([color, logo]) => {
        console.log(`${color} shirt with ${logo}`);
      });
  }


}
