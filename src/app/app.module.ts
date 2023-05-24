import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpinningWheelComponent } from './components/spinning-wheel/spinning-wheel.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    SpinningWheelComponent
  ],
    imports: [
        BrowserModule,
        CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
