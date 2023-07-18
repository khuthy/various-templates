import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  public routes = routes;
   

 

}
