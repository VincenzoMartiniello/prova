import { Component, Input, Optional, Output, Self, ViewChild, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomComponent),
      multi: true
    }]
})
export class CustomComponent implements ControlValueAccessor{
  @Input()data1:string[];

  val = '';


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
