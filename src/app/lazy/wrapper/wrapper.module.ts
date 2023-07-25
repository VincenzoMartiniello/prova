import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { FormComponent } from './form/form.component';
import { TabellaComponent } from './tabella/tabella.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorDirective } from '../utility/color.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WrapperComponent,
    FormComponent,
    TabellaComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[ColorDirective]
})
export class WrapperModule { }
