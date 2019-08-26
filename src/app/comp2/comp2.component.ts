import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  private myText = '';

  constructor() { }

  ngOnInit() {
  }

  get text() {
    this.myText += 'checked!\n';
    return this.myText;
  }
}
