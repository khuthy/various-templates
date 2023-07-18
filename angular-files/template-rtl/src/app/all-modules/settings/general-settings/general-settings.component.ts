import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {
  deleteIcon1 = true;
  deleteIcon2 = true;
  public routes = routes;
   
  deleteIconOne(){
    this.deleteIcon1 = !this.deleteIcon1; 
  }
  deleteIconTwo(){
    this.deleteIcon2 = !this.deleteIcon2; 
  }
 

}
