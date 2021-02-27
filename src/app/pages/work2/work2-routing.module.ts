import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Work1Component} from '../work1/work1.component';
import {Work2Component} from './work2.component';

const routes: Routes = [{
  path: '', component: Work2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Work2RoutingModule { }
