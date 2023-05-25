import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinningWheelComponent} from "./components/spinning-wheel/spinning-wheel.component";
import {PrizeGeneratorModule} from "../prize-generator/prize-generator.module";

@NgModule({
  declarations: [
    SpinningWheelComponent,
  ],
  imports: [
    CommonModule,
    PrizeGeneratorModule
  ],
  exports: [
    SpinningWheelComponent
  ],
})
export class SpinningWheelModule { }
