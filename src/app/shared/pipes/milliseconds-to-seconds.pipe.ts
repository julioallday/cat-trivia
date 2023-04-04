import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToSeconds',
})
export class MillisecondsToSecondsPipe implements PipeTransform {
  transform(miliseconds: number) {
    if (miliseconds > 60000) {
      const minutesResult = miliseconds / 60000;
      return `${minutesResult}m`;
    }
    const secondsResult = miliseconds / 1000;
    return `${secondsResult}s`;
  }
}
