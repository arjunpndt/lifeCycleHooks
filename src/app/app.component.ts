import { Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // here I am using view Encapsulation type 'None' so whatever css you write in 'app.component.css' that will be apply for all the child component
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Angular LifeCycle Hooks';
  inputVal = '';
  // user: string[] = ['user', 'user2'];
  OnIinit = false;

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
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  changevalue(value: string): void {
    this.title = value;
  }
  checkHooks(inputValue: HTMLInputElement): void {
    this.inputVal = inputValue.value;
    // this.user.push(inputValue.value);
    // console.log(this.user);
  }
}
