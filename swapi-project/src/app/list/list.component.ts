import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data = null;

  constructor() {
    fetch('http://swapi.dev/api/people')
      .then((res) => res.json())
      .then((json) => {
        console.warn(json);
        this.data = json;
      });
  }

  ngOnInit(): void {}
}
