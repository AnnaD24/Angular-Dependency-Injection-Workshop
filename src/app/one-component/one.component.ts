import {Component, Host, Self} from '@angular/core';
import {SpinService} from "../../spinning-wheel/service/spin.service";

@Component({
  selector: 'app-one-component',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  constructor(public spinService: SpinService) {
  }


}
