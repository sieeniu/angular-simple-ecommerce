import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priceFormat' })
export class PriceFormatPipe implements PipeTransform {
  transform(price: number, currency = 'PLN'): string {
    return price.toLocaleString('pl-PL', {
      style: 'currency',
      currency,
    });
  }
}
