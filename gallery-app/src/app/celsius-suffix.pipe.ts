import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'celsiusSuffix',
})
export class CelsiusSuffixPipe implements PipeTransform {
    transform(value: number, prefix: string = ''): string {
        return prefix + ' ' + value + ' °C';
    }
}
