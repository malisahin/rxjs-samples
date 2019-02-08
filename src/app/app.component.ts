import { Component } from '@angular/core';
import { ConcatMapService } from './operators/combination/concat-map.service';
import { MergeMapService } from './operators/combination/merge-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-samples';

  constructor(private mergeMapService: MergeMapService, private concatMapService: ConcatMapService) {
    this.concatMapService.execute();
  }
}
