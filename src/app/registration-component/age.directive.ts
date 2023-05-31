import {Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appAgeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true}]
})
export class AgeValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value < 18 ? { ageValidator: false} : null;
  }
}
