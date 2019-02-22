import { Component, Injectable } from "@angular/core";
import { BaseOperatorService } from "../base/base-operator.service";
import { interval } from "rxjs";
import { bufferTime, take } from "rxjs/operators";

/**
 * Gelen veriyi buffer ile bir array icerisinde tutar. Array'in emit olma sruresi buffer time icine girilen parametredir.
 */

@Injectable({
  providedIn: "root"
})
export class BufferTimeService implements BaseOperatorService {
  execute() {
    interval(1000)
      .pipe(
        bufferTime(3000, 1000),
        take(6)
      )
      .subscribe(sequence => {
        console.log(sequence);
      });
  }
}
