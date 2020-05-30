import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'celsius',
})
export class CelsiusPipe implements PipeTransform {
    transform(kelvin: number): number {
        return Math.ceil(kelvin - 273.15);
    }
}
