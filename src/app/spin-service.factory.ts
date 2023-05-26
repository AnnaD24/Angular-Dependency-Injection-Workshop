import {DateService} from "./date.service";
import {PrizeGeneratorService} from "../prize-generator/service/prize-generator.service";
import {FakePrizeGeneratorService} from "../prize-generator/service/fake-prize-generator.service";
import {FakeSpinService} from "../spinning-wheel/service/fake-spin.service";
import {SpinService} from "../spinning-wheel/service/spin.service";

export const spinServiceFactory = (dateService: DateService, prizeGeneratorService: PrizeGeneratorService, fakePrizeGeneratorService: FakePrizeGeneratorService) => {
  return dateService.isAprilFoolsDay() ? new FakeSpinService(fakePrizeGeneratorService) : new SpinService(prizeGeneratorService);
}
