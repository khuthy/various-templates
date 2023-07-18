import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-themify',
  templateUrl: './themify.component.html',
  styleUrls: ['./themify.component.scss']
})
export class ThemifyComponent  {
  public routes = routes;


}
