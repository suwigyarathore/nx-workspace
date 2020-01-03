import { Component } from '@angular/core';
import { pizza } from '@nx-sample/utilities';

@Component({
  selector: 'nx-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ` ${pizza} booking`;
}
