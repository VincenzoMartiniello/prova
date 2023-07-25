import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersRoutingModule } from './numbers-routing.module';
import { NumbersComponent } from './numbers.component';
import { NumeriDirective } from '../utility/numeri.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@NgModule({
  declarations: [
    NumbersComponent,
    NumeriDirective,
    InputComponent
  ],
  imports: [
    CommonModule,
    NumbersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[NumeriDirective]
})
export class NumbersModule { }


