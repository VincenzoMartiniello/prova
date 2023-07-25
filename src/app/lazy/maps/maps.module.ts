import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapsRoutingModule,
    GoogleMapsModule
  ],
  exports:[MapsComponent]
})
export class MapsModule { }
