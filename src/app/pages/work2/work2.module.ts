import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Work2RoutingModule } from './work2-routing.module';
import { Work2Component } from './work2.component';


@NgModule({
  declarations: [Work2Component],
  imports: [
    CommonModule,
    Work2RoutingModule
  ]
})
export class Work2Module { }
