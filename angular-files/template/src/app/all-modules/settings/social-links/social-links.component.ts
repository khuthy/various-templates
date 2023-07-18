import { Component } from '@angular/core';
import { DataService, routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent  {
  public routes = routes;
  public skillsArray: Array<number> = [1];
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public socialLinks: any = [];

  constructor(public data:DataService) { 
    this.socialLinks = this.data.socialLinks;
  }
 

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
 delete(index:any){
  this.socialLinks.splice(index, 1)
 } 
 add(){
  this.socialLinks.push( {
    icon:"github",
    placeholder:"Social Link"
  })
 }
}
