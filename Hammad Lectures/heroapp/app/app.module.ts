import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { LoopbackComponent } from './loop-back/loop-back.component';


@NgModule({
  imports:      [ BrowserModule ], //modules for browser support
  declarations: [ AppComponent, ClickMeComponent, LoopbackComponent], //customize components
  bootstrap:    [ AppComponent ] //for root component
})
export class AppModule { }
