import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent  {
  html = `<span><em>Tooltip</em> <u>with</u> <b>HTML</b></span>`;

  public routes = routes;
   

}
