import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})

export class PopoverComponent  {
  public routes = routes;
  popoverOne = false;

   

 

}
