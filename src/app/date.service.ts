import {Injectable, InjectionToken} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class  DateService {

  constructor() { }

  isAprilFoolsDay(): boolean {
    const random = Math.random();
    return true
  }
}
