import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Work3RoutingModule } from './work3-routing.module';
import { Work3Component } from './work3.component';


@NgModule({
  declarations: [Work3Component],
  imports: [
    CommonModule,
    Work3RoutingModule
  ]
})
export class Work3Module { }
