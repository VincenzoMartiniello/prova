import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import {ReactiveFormsModule } from '@angular/forms';
import {NumeriDirective } from '../utility/numeri.directive';
import { NumbersModule } from '../numbers/numbers.module';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
    NumbersModule
  ]
})
export class GameModule { }
