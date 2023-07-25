import { Component, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom3',
  templateUrl: './custom3.component.html',
  styleUrls: ['./custom3.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Custom3Component),
      multi: true
    }]
})
export class Custom3Component implements ControlValueAccessor {


  val = '';
  @Input()data3:string[];
  @Input()currentData2:string[];disabled: boolean;
;
  constructor() { }

  onChange: any = () => {}
  onTouch: any = () => {}

  // sets the value used by the ngModel of the element
  set value(val: string){
      this.onChange(val)
      this.onTouch(val)
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any){
    this.value = value
  }

  // When the value in the UI is changed, this method will invoke a callback function
  registerOnChange(fn: any){
    this.onChange = fn
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
  onSelect(option:any):void{
    this.onChange(option);

 }

}
