import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnChanges {
  @Input() message: string = 'Child Component';

  ngOnChanges() {
    console.log('OnChanges Hooks From Child COmponents');
  }
}
