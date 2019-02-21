import {Injectable} from '@angular/core';
import {interval, Observable, of, timer} from 'rxjs';
import {delay, mapTo, switchMap} from 'rxjs/operators';


/**
 * @description Switchmap operatoru pipe icinde kullanilir. Bir observable ile cagrilir.
 *  Return degeri ister. Return Type ise yine Observable olmak zorundadir.
 *  Result degeri subscribe oldugunde resources degeri de subscribe olur. Oncelikle source calisir daha sonra ise result subscribe olur.
 */
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

  simulateHttp(val: any, waitFor: number = 1000): Observable<any> {
    return of(val).pipe(delay(waitFor));
  }

  execute2() {
    const http1$ = this.simulateHttp('1', 1000);
    const http2$ = this.simulateHttp('2', 2000);

    http1$.subscribe(
      val => console.log(val),
      err => console.error(err),
      () => console.log('http1$ is completed')
    );

    http2$.subscribe(
      val => console.log(val),
      err => console.error(err),
      () => console.log('http2$ is completed')
    );
  }

  execute3() {
    const saveUser$ = this.simulateHttp('User is saved');

    const httpResult$ = saveUser$.pipe(switchMap(sourceValue => {
      console.log(sourceValue);
      return this.simulateHttp('data reloaded', 2000);
    }));

    httpResult$.subscribe(
      console.log,
      console.error,
      () => console.log('Completed httpResult$')
    )
  }
}
