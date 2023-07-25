import { Directive,Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() color:any;

  constructor(private el: ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
  this.colorize(this.color);
}
@HostListener('mouseleave') onMouseLeave(){
  this.colorize('');
}

private colorize(color:string){
  this.el.nativeElement.style.background=color;
}
}
