import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardModule} from "primeng/card";
import {SpinningWheelModule} from "../spinning-wheel/spinning-wheel.module";
import { OneClientComponent } from './one-client/one-client.component';
import { AnotherClientComponent } from './another-client/another-client.component';
import {ButtonModule} from "primeng/button";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OneClientComponent,
    AnotherClientComponent,
  ],
  imports: [
    // RouterModule.forRoot(routes),
    BrowserModule,
    CardModule,
    SpinningWheelModule,
    ButtonModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
