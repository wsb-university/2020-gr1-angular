import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() character;
  @Output() clickEmitter = new EventEmitter();

  constructor() {
    // tutaj @Input bedzie pusty
    // console.warn('constructor: ', this.character);
  }

  ngOnInit(): void {
    // tutaj @Input bedzie wypelniony
    // console.warn('ngOnInit: ', this.character);
  }

  handleClick() {
    this.clickEmitter.emit('Kliknięto w bohatera: ' + this.character.name);
  }
}
