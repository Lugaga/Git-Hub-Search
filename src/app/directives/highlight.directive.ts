import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('hover')
  onMouseOver() {
    this.lightText('#34CD34');
  }

  private lightText(action: string) {
    this.elem.nativeElement.style.color = action;
  }
}
