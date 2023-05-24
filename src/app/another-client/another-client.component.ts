import { Component } from '@angular/core';
import {SpinService} from "../../spinning-wheel/service/spin.service";

@Component({
  selector: 'app-another-client',
  templateUrl: './another-client.component.html',
  styleUrls: ['./another-client.component.scss']
})
export class AnotherClientComponent {

  constructor(protected spinService: SpinService) {}


}
