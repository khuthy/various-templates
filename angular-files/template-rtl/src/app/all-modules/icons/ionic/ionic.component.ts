import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss']
})
export class IonicComponent {
  public routes = routes;


}
