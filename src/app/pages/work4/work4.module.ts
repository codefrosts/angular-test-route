import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Work4RoutingModule } from './work4-routing.module';
import { Work4Component } from './work4.component';


@NgModule({
  declarations: [Work4Component],
  imports: [
    CommonModule,
    Work4RoutingModule
  ]
})
export class Work4Module { }
