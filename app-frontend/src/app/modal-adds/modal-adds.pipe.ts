import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mascaraCPF'})
export class ModalAddsPipe implements PipeTransform {

  transform(value: string): string {
    
    let cpfFormatado = value;

    cpfFormatado = cpfFormatado
    .replace(/[^0-9]/, '')            //campo apenas para numeros
    .replace(                         //formato do campo
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4'
    ); 

    return cpfFormatado;
  }

}
