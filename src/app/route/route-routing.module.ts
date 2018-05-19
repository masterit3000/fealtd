import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponentComponent } from '../dashboard-component/dashboard-component.component';
import {KhachHangComponent } from '../khach-hang/khach-hang.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponentComponent
  },
  {
    path: 'khachhang',
    component: KhachHangComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
