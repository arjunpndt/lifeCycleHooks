import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold',
})
export class BoldPipe implements PipeTransform {
  // constructor(private sanitizer: Sanitizer) {}
  transform(value: string): any {
    return '<b>' + value + '</b>';
  }
}
