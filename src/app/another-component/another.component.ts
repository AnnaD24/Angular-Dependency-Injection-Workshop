import {Component, inject, Inject} from '@angular/core';
import {SpinService} from "../../spinning-wheel/service/spin.service";
import {FOOLS_DAY_TOKEN} from "../spin-service.token";
import {FakeSpinService} from "../../spinning-wheel/service/fake-spin.service";

@Component({
  selector: 'app-another-component',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss'],
})
export class AnotherComponent {

  spinService = this.foolsDay ? inject(FakeSpinService) : inject(SpinService);

  constructor(@Inject(FOOLS_DAY_TOKEN) private foolsDay: boolean) {}


}
