import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SpinningWheelModule} from "../spinning-wheel/spinning-wheel.module";
import {OneComponent} from "./one-component/one.component";
import {AnotherComponent} from "./another-component/another.component";
import {ButtonModule} from "primeng/button";
import { HighlightDirective } from './one-component/highlight.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistrationComponent} from "./registration-component/registration.component";
import {InputNumberModule} from "primeng/inputnumber";
import { AgeValidatorDirective } from './registration-component/age.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    AnotherComponent,
    HighlightDirective,
    RegistrationComponent,
    AgeValidatorDirective
  ],
  imports: [
    BrowserModule,
    SpinningWheelModule,
    ButtonModule,
    FormsModule,
    InputNumberModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
