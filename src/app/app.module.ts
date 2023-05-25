import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SpinningWheelModule} from "../spinning-wheel/spinning-wheel.module";
import {OneComponent} from "./one-component/one.component";
import {AnotherComponent} from "./another-component/another.component";
import {ButtonModule} from "primeng/button";
import {PrizeGeneratorService} from "../prize-generator/service/prize-generator.service";
import {FakePrizeGeneratorService} from "../prize-generator/service/fake-prize-generator.service";
import {PrizeGeneratorModule} from "../prize-generator/prize-generator.module";
import {SpinService} from "../spinning-wheel/service/spin.service";
import {FakeSpinService} from "../spinning-wheel/service/fake-spin.service";

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
  // providers: [
  //   {
  //     provide: SpinService, useExisting: FakeSpinService
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
