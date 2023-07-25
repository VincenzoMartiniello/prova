import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondivisoComponent } from './shared/condiviso/condiviso.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { ErrorComponent } from './lazy/errorHandling/error/error.component';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./lazy/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'customers', loadChildren: () => import('./lazy/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'home',component:MainLayoutComponent},
  { path: 'wrapper', loadChildren: () => import('./lazy/wrapper/wrapper.module').then(m => m.WrapperModule) },
  { path: 'error',component:ErrorComponent},
  //{ path: '', redirectTo:'home',pathMatch: 'full' },
  { path: 'charts', loadChildren: () => import('./lazy/charts/charts.module').then(m => m.ChartsModule) },
  { path: 'numbers', loadChildren: () => import('./lazy/numbers/numbers.module').then(m => m.NumbersModule) },
  { path: 'game', loadChildren: () => import('./lazy/game/game.module').then(m => m.GameModule) },
  { path: 'group', loadChildren: () => import('./lazy/group/group.module').then(m => m.GroupModule) },
  { path: 'file-upload', loadChildren: () => import('./lazy/file-upload/file-upload.module').then(m => m.FileUploadModule) },
  { path: 'maps', loadChildren: () => import('./lazy/maps/maps.module').then(m => m.MapsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
