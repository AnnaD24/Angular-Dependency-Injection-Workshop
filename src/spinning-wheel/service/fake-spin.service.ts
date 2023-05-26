import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FakePrizeGeneratorService} from "../../prize-generator/service/fake-prize-generator.service";

@Injectable({
  providedIn: 'root'
})
export class FakeSpinService {
  prizeWon$ = new BehaviorSubject<string>('Nothing yet');

  constructor(private fakePrize: FakePrizeGeneratorService) { }

  spinAndWin() {
    this.prizeWon$.next(this.fakePrize.getPrize())
  }
}
