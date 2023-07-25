import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomComponent } from '../custom/custom.component';
import { Custom2Component } from '../custom2/custom2.component';
import { Custom3Component } from '../custom3/custom3.component';


@NgModule({
  declarations: [
    GroupComponent,
    CustomComponent,
    Custom2Component,
    Custom3Component
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [GroupComponent],


})
export class GroupModule { }
