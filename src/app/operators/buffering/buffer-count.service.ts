import {BaseOperatorService} from '../base/base-operator.service';
import {interval} from 'rxjs';
import {bufferCount, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

/**
 * BufferCount operatoru ait oldugu observable'i buffer ıle array icerisinde tutar.
 * BufferCount icerisine girilen deger(number) array size'i belirler.
 */
@Injectable({
  providedIn: 'root',
})
export class BufferCountService implements BaseOperatorService {

  execute() {
    interval(200).pipe(
      bufferCount(4),
      take(10)
    ).subscribe(result => {
      console.log(result);
    });
  }
}
