import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { LoginComponent }   from './login/login.component';


@NgModule({
  imports:      [ BrowserModule ], //modules for browser support
  declarations: [ AppComponent, LoginComponent ], //customize components
  bootstrap:    [ AppComponent ] //for root component
})
export class AppModule { }
