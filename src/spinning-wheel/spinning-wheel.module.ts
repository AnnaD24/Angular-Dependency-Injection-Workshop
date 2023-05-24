import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinningWheelComponent} from "./components/spinning-wheel/spinning-wheel.component";

@NgModule({
  declarations: [
    SpinningWheelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinningWheelComponent
  ]
})
export class SpinningWheelModule { }
