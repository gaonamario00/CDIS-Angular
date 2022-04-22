import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appModelsInput]',
  providers: [{provide: NG_VALIDATORS, useExisting: ModelsInputDirective, multi: true}]
})
export class ModelsInputDirective implements Validator {
 @Input('appModelsInput') modelsInput!: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // // return this.modelsInput ? this.modelsInputValidator(new RegExp(this.modelsInput, "i"))(control) : null;
    return this.modelsInput ? this.modelsInputValidator(new RegExp("[0-9]{4}(,[0-9]{4})*", "i"))(control) : null;
  }

  modelsInputValidator(modelsRe : RegExp): ValidatorFn{
    return (control: AbstractControl) : {[key:string] : any } | null =>{
      const models = modelsRe.test(control.value);
      return models ? { 'modelsInput' : {value: control.value}} : null;
    }
  }

}
