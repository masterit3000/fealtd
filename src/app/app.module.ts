import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiderBarComponent } from './sider-bar/sider-bar.component';
import {RouteModule} from './route/route.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { KhachHangComponent } from './khach-hang/khach-hang.component';
import { RouteRoutingModule } from './route/route-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SiderBarComponent,
    DashboardComponentComponent,
    NavBarComponent,
    FooterComponent,
    KhachHangComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
