import {Component} from "@angular/core";

@Component({
  selector: 'auth-container',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['/auth-container.component.scss']
})
export class AuthContainer {
}
