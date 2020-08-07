import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appItemCardBorderColor]'
})
export class ItemCardBorderColorDirective implements OnChanges{
  @Input('appItemCardBorderColor')
  private date: string;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  public ngOnChanges(): void {
    const time: number = new Date().getTime() - new Date(this.date).getTime();
    const oneDayInMs: number = 1000 * 60 * 60 * 24;
    const days = Math.ceil(time / oneDayInMs);
    this.setStyle(days);
  }

  setStyle(days: number): void {
    const month = 31;
    const halfYear = 186;
    if (days > halfYear) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid red');
    } else if (days < month) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid green');
    } else {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', '5px solid blue');
    }
  }
}


