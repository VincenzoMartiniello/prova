import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from '../utility/color.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    OrdersRoutingModule,
    SharedModule,
    CommonModule,
    InfiniteScrollModule

  ]
})
export class OrdersModule { }
