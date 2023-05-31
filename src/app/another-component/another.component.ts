import {Component, Host, inject, SkipSelf} from '@angular/core';
import {SpinService} from "../../spinning-wheel/service/spin.service";

@Component({
  selector: 'app-another-component',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss'],
})
export class AnotherComponent {

  constructor(public spinService: SpinService) {
  }

}
