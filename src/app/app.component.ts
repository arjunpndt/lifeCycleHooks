import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'LifeCycleHooks';
  inputVal = '';

  // OnIinit = false;

  constructor() {}

  ngOnInit() {
    console.log('OnInit called');
  }
  ngDoCheck() {
    console.log('DoCheck Hook Called');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit Called');
  }

  changevalue(value: string): void {
    this.title = value;
  }
  checkHooks(inputValue: HTMLInputElement): void {
    this.inputVal = inputValue.value;
    // console.log('button clicked', inputValue);
  }
}
