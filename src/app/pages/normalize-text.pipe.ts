import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeText'
})
export class NormalizeTextPipe implements PipeTransform{
    transform(value: string): string {
      if(!value) {
        return '';
      }
      return value.replace(/[\n\f]/g, ' ')
    }
}