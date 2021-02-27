import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Work1RoutingModule } from './work1-routing.module';
import { Work1Component } from './work1.component';


@NgModule({
  declarations: [Work1Component],
  imports: [
    CommonModule,
    Work1RoutingModule
  ]
})
export class Work1Module { }
