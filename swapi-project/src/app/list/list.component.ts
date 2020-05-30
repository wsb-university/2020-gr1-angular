import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  pageNumber = 8;
  data = null;
  selectedIndex = 1;

  constructor(httpClient: HttpClient) {
    httpClient
      .get('https://swapi.dev/api/people?page=' + this.pageNumber)
      .toPromise()
      .then((json) => {
        console.warn(json);
        this.data = json;
      });
  }

  handleSelectIndex(i) {
    this.selectedIndex = i;
  }

  handleDetailsClick($event) {
    console.warn({ $event });
  }
}
