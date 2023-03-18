import {Component} from "@angular/core";

@Component({
  selector: 'site-container',
  templateUrl: '/site-container.component.html',
  styleUrls: ['/site-container.component.scss']
})
export class SiteContainer {
  public toggle: boolean = false;

  toggleSidebar(event: boolean){
    this.toggle = event;
  }

}
