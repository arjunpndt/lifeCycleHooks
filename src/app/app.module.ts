import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BoldPipe } from './custom-pipes/bold.pipe';
import { ShadowDomExampleComponent } from './shadow-dom-example/shadow-dom-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    BoldPipe,
    ShadowDomExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
