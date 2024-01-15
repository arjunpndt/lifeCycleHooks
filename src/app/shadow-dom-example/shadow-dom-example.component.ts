import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-example',
  templateUrl: './shadow-dom-example.component.html',
  styleUrls: ['./shadow-dom-example.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomExampleComponent {}
