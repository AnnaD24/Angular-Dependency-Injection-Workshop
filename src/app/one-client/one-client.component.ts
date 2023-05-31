import { Component } from '@angular/core';
import {SpinService} from "../../spinning-wheel/service/spin.service";

@Component({
  selector: 'app-one-client',
  templateUrl: './one-client.component.html',
  styleUrls: ['./one-client.component.css']
})
export class OneClientComponent {
  constructor(public spinService: SpinService) {}

}
