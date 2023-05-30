import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinningWheelComponent} from "./components/spinning-wheel/spinning-wheel.component";
import {SpinService} from "./service/spin.service";

@NgModule({
  declarations: [
    SpinningWheelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinningWheelComponent
  ],
  // providers: [SpinService]
})
export class SpinningWheelModule { }
