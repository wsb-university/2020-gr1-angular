import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiHelper {
    constructor(private httpClient: HttpClient) {}

    fetchData(dataType, location) {
        return this.httpClient
            .get(
                'https://api.openweathermap.org/data/2.5/' +
                    dataType +
                    '?q=' +
                    location +
                    '&appid=ae76d0efed32d9f29c4d54a5738b80ca'
            )
            .toPromise();
    }
}
