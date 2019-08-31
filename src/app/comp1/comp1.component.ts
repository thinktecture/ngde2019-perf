import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  @ViewChild('button', {static: true}) button: ElementRef<HTMLButtonElement>;

  private myText = '';

  constructor(private readonly ngZone: NgZone, private readonly renderer: Renderer2) {
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.listen(this.button.nativeElement, 'mousemove', () => console.log('move without CD cycle!'));
    });
  }

  get text() {
    this.myText += 'checked!\n';
    return this.myText;
  }
}
