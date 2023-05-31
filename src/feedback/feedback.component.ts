import { Component } from '@angular/core';
import {SpinService} from "../spinning-wheel/service/spin.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(public spinService: SpinService) {

  }

}
