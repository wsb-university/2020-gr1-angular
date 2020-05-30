import { Component } from '@angular/core';
import { ApiHelper } from '../api-helper.service';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent {
    location = 'Berlin';
    data = null;

    constructor(private apiHelper: ApiHelper) {}

    handleSearch() {
        this.apiHelper.fetchData('forecast', this.location).then((data) => {
            console.log({ data });
            this.data = data;
        });
    }
}
