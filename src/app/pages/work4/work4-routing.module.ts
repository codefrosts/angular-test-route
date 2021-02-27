import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Work1Component} from '../work1/work1.component';
import {Work4Component} from './work4.component';

const routes: Routes = [{
  path: '', component: Work4Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Work4RoutingModule { }
