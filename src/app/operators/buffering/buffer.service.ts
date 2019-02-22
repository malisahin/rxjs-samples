import {BaseOperatorService} from '../base/base-operator.service';
import {interval} from 'rxjs';
import {buffer, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

/**
 * Emit buffer after some times
 * Buffer operatoru daha once gelen verileri array icinde tutar, daha sonra da buffer icinde parametre olarak aldigi observable bitince array'e emitler.
 */
@Injectable({
  providedIn: 'root',
})
export class BufferService implements BaseOperatorService {

  execute() {
    interval(200).pipe(
      buffer(interval(1200)),
      take(5)
    ).subscribe(result => {
      console.log(result);
    });
  }
}
