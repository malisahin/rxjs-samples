import { Injectable } from '@angular/core';
import { BaseOperatorService } from '../base/base-operator.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const data = of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
]);

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MapService implements BaseOperatorService {

  execute() {
    data.pipe(
      map(cars => cars.map(car => `${car.brand} ${car.model}`))
    ).subscribe(cars => cars.forEach(car => console.log(car)));
  }


}
