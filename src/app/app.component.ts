import { Component } from "@angular/core";
import { BufferTimeService } from "./operators/buffering/buffer-time.service";
import { BufferToggleService } from "./operators/buffering/buffer-toggle.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "rxjs-samples";

  constructor(private service: BufferToggleService) {
    //constructor(private service: SwitchMapService) {
    //constructor(private mergeMapService: MergeMapService, private concatMapService: ConcatMapService) {
    this.service.execute();
  }
}
