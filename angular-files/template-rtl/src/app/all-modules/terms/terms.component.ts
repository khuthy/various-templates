import { Component } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  public routes = routes;
   
}