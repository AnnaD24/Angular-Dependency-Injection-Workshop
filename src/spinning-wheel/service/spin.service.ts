import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {PrizeGeneratorService} from "../../prize-generator/service/prize-generator.service";

@Injectable({
  providedIn: "root"
})
export class SpinService {
  prizeWon$ = new BehaviorSubject<string>('Nothing yet');

  constructor(private prizeService: PrizeGeneratorService) { }

  spinAndWin() {
    this.prizeWon$.next(this.prizeService.getPrize())
  }
}
