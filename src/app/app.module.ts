import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardModule} from "primeng/card";
import {SpinningWheelModule} from "../spinning-wheel/spinning-wheel.module";
import { OneClientComponent } from './one-client/one-client.component';
import { AnotherClientComponent } from './another-client/another-client.component';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    OneClientComponent,
    AnotherClientComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    SpinningWheelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
