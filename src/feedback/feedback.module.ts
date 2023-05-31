import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import {RouterModule, Routes} from "@angular/router";
import {SpinService} from "../spinning-wheel/service/spin.service";

const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent
  }
];

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  // providers: [SpinService]
})
export class FeedbackModule { }
