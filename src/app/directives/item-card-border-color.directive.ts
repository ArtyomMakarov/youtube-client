import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { CommonConstants } from '../constants/common.constants';

@Directive({
  selector: '[appItemCardBorderColor]'
})
export class ItemCardBorderColorDirective implements OnChanges{
  @Input('appItemCardBorderColor') private date: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  private setStyle(DAYS: number): void {
    const MONTH: number = CommonConstants.MONTH;
    const HALF_YEAR: number = CommonConstants.HALF_YEAR;
    if (DAYS > HALF_YEAR) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', CommonConstants.RED);
    } else if (DAYS < MONTH) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', CommonConstants.GREEN);
    } else {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'border-bottom', CommonConstants.BLUE);
    }
  }

  public ngOnChanges(): void {
    const TIME: number = new Date(CommonConstants.DATE).getTime() - new Date(this.date).getTime();
    const ONEDAY_IN_MS: number = CommonConstants.ONEDAY_IN_MS;
    const DAYS: number = Math.ceil(TIME / ONEDAY_IN_MS);
    this.setStyle(DAYS);
  }
}


