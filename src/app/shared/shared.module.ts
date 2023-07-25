import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CondivisoComponent } from './condiviso/condiviso.component';
import { ColorDirective } from '../lazy/utility/color.directive';



@NgModule({
  declarations: [CondivisoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CondivisoComponent]
})
export class SharedModule { }
