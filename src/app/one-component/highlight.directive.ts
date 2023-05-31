import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}
