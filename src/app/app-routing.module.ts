import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'detail/:prodId',
    loadChildren: () =>
      import('./pages/detail/detail.module').then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
