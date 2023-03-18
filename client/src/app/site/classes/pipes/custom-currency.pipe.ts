import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: any): any {
    return (value === 1) ? 'UAH' : 'USD'
  }
}
