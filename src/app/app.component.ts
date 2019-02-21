import {Component} from '@angular/core';
import {ConcatMapService} from './operators/combination/concat-map.service';
import {MergeMapService} from './operators/combination/merge-map.service';
import {SwitchMapService} from './operators/transformation/switch-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-samples';

  constructor(private service: SwitchMapService) {
    //constructor(private mergeMapService: MergeMapService, private concatMapService: ConcatMapService) {
    this.service.execute3();
  }
}
