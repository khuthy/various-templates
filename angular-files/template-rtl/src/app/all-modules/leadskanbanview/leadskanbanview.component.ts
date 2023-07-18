import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index';
@Component({
  selector: 'app-leadskanbanview',
  templateUrl: './leadskanbanview.component.html',
  styleUrls: ['./leadskanbanview.component.scss']
})
export class LeadskanbanviewComponent {
  public routes = routes;

}
