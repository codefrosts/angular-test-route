import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Work1Component} from '../work1/work1.component';
import {Work3Component} from './work3.component';

const routes: Routes = [{
  path: '', component: Work3Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Work3RoutingModule { }
