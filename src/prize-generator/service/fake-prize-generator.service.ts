import { Injectable } from '@angular/core';
import {PrizeGeneratorModule} from "../prize-generator.module";
import {emojis} from "../emojis";

@Injectable({
  providedIn: PrizeGeneratorModule
})
export class FakePrizeGeneratorService {

  constructor() { }

  public getPrize() {
    const randomIndex = Math.floor(Math.random() * 70);
    return 'TZEAPA! ' + emojis.at(randomIndex)
  }
}
