import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeri]'
})
export class NumeriDirective {
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
		const initalValue = this.el.nativeElement.value;
    console.log(this.el.nativeElement.value);
		this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    console.log(this.el.nativeElement.value);
		 if (initalValue !== this.el.nativeElement.value) {
		 	event.stopPropagation();
		 }
	}
  }

