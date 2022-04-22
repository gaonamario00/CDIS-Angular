import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelo'
})
export class FormatoModeloPipe implements PipeTransform {

  transform(modelos: number[], ...args: unknown[]): unknown {
    let modelFix: string;
    let cant: number = modelos.length;

    if(cant == 1 || cant == 2){
      return modelos;
    }
    
    modelFix = `[${modelos[0]}-${modelos[cant - 1]}]`;

    return modelFix;
  }

}
