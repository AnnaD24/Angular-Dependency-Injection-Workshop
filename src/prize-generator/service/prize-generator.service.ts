import { Injectable } from '@angular/core';
import {PrizeGeneratorModule} from "../prize-generator.module";
import {emojis} from "../emojis";

@Injectable({
  providedIn: PrizeGeneratorModule
})
export class PrizeGeneratorService {

  constructor() { }

  public getPrize() {
    const randomIndex = Math.floor(Math.random() * 70);
    return randomIndex + ' de ' + emojis.at(randomIndex) as string
  }
}
