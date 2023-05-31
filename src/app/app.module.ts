import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SpinningWheelModule} from "../spinning-wheel/spinning-wheel.module";
import {OneComponent} from "./one-component/one.component";
import {AnotherComponent} from "./another-component/another.component";
import {ButtonModule} from "primeng/button";
import {SpinService} from "../spinning-wheel/service/spin.service";
import { HighlightDirective } from './one-component/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    AnotherComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    SpinningWheelModule,
    ButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
