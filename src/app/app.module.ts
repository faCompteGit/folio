import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'jquery';
import { ObserveVisibilityDirectiveDirective } from './observe-visibility-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    ObserveVisibilityDirectiveDirective
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
