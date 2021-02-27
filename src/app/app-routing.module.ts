import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanActivatePageService} from './services/can-activate-page.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/work1/work1.module').then((m) => m.Work1Module),
  },
  {
    path: 'work2',
    loadChildren: () =>
      import('./pages/work2/work2.module').then((m) => m.Work2Module),
    canActivate: [CanActivatePageService]
  },
  {
    path: 'work3',
    loadChildren: () =>
      import('./pages/work3/work3.module').then((m) => m.Work3Module),
    canActivate: [CanActivatePageService]
  },
  {
    path: 'work4',
    loadChildren: () =>
      import('./pages/work4/work4.module').then((m) => m.Work4Module),
    canActivate: [CanActivatePageService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
