import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinService {
  prizeWon$ = new BehaviorSubject<string>('Nothing yet');

  constructor() { }

  spinAndWin() {
    this.prizeWon$.next(this.getPrize())
  }

  private getPrize() {
    return (Math.random()* 100).toFixed(0) + ' RON'
  }
}
