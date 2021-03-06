import { Component } from '@angular/core';
import { ApiHelper } from '../api-helper.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
    location = 'Berlin';
    data = null;

    constructor(private apiHelper: ApiHelper) {}

    handleSearch() {
        this.apiHelper.fetchData('weather', this.location).then((data) => {
            console.log({ data });
            this.data = data;
        });
    }
}
