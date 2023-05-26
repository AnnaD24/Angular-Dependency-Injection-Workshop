import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SpinningWheelModule} from "../spinning-wheel/spinning-wheel.module";
import {OneComponent} from "./one-component/one.component";
import {AnotherComponent} from "./another-component/another.component";
import {ButtonModule} from "primeng/button";
import {FOOLS_DAY_TOKEN} from "./spin-service.token";

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    SpinningWheelModule,
    ButtonModule,
  ],
  bootstrap: [AppComponent],
  providers: [{provide: FOOLS_DAY_TOKEN, useValue: true}]
})
export class AppModule {
}
