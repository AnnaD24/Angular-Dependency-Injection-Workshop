import {Component, Inject, inject} from '@angular/core';
import {SpinService} from "../../spinning-wheel/service/spin.service";
import {FakeSpinService} from "../../spinning-wheel/service/fake-spin.service";
import {FOOLS_DAY_TOKEN} from "../spin-service.token";

@Component({
  selector: 'app-one-component',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  spinService = this.foolsDay ? inject(FakeSpinService) : inject(SpinService);

  constructor(@Inject(FOOLS_DAY_TOKEN) private foolsDay: boolean) {}

}
