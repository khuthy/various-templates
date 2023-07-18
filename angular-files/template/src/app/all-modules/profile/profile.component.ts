import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {
  public routes = routes;

}
