import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CustomersComponent,
  ],
  imports: [
    CustomersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports:[CustomersComponent]
})
export class CustomersModule { }
