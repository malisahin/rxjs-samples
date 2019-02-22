import { Injectable } from "@angular/core";
import { BaseOperatorService } from "../base/base-operator.service";
import { interval } from "rxjs";
import { bufferToggle, take, tap } from "rxjs/operators";
import { sequence } from "@angular/animations";

@Injectable({
  providedIn: "root"
})
export class BufferToggleService implements BaseOperatorService {
  opening = interval(400).pipe(
    tap(() => {
      console.log("open");
    })
  );

  closing = () =>
    interval(300).pipe(
      tap(() => {
        console.log("Closed");
      })
    );

  execute() {
    interval(100)
      .pipe(
        tap(x => console.log(x)),
        bufferToggle(this.opening, this.closing),
        take(5)
      )
      .subscribe(sequence => {
        console.log(sequence);
      });
  }
}
