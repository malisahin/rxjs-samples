import { Component } from '@angular/core';
import { MergeMapService } from './operators/combination/merge-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-samples';

  constructor(private  service: MergeMapService) {
    this.service.execute();
  }
}
