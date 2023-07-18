import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-tablesbasic',
  templateUrl: './tablesbasic.component.html',
  styleUrls: ['./tablesbasic.component.scss']
})
export class TablesbasicComponent {
  public routes = routes;

}
