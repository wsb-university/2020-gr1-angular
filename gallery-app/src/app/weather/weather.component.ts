import { Component } from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
    location = 'Berlin';
    data = null;

    constructor() {}

    calculate(kelvin) {
        return Math.ceil(kelvin - 272.15);
    }

    handleSearch() {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' +
                this.location +
                '&appid=ae76d0efed32d9f29c4d54a5738b80ca'
        )
            .then((res) => res.json())
            .then((data) => {
                console.log({ data });
                this.data = data;
            });
    }
}
