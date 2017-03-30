import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { ModalModule } from "ng2-modal";
import { DateTimePickerModule } from 'ng2-date-time-picker';
import { WizardModule } from "ng2-archwizard/dist";

import { AppComponent } from './app.component';
import { AfterComponent } from './components/after-login/after-login.component';
import { BeforeComponent } from './components/before-login/before-login.component';
import { ServiceTopMenuComponent } from './components/service-top-menu/service-top-menu.component';
import { ServiceSideMenuComponent } from './components/service-side-menu/service-side-menu.component';
import { ServiceManagerDashboardCardwallComponent } from './components/service-manager-dashboard-cardwall/service-manager-dashboard-cardwall.component';
import { ServiceManagerDashboardRouterComponent } from './components/service-manager-dashboard-router/service-manager-dashboard-router.component';
import { ServiceManagerDashboardComponent } from './components/service-manager-dashboard/service-manager-dashboard.component';

import { TechnicianDashboardComponent } from './components/technician-dashboard/technician-dashboard.component';
import { TechnicianDashboardCardWallComponent } from './components/technician-dashboard-cardwall/technician-dashboard-cardwall.component';
import { TechnicianDashboardRouterComponent } from './components/technician-dashboard-router/technician-dashboard-router.component';

import { ForemanDashboardComponent } from './components/foreman-dashboard/foreman-dashboard.component';
import { ForemanDashboardCardWallComponent } from './components/foreman-dashboard-cardwall/foreman-dashboard-cardwall.component';
import { ForemanDashboardRouterComponent } from './components/foreman-dashboard-router/foreman-dashboard-router.component';

import { AuthService } from './service/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    ServiceTopMenuComponent,
    ServiceSideMenuComponent,
    ServiceManagerDashboardCardwallComponent,
    ServiceManagerDashboardRouterComponent,
    ServiceManagerDashboardComponent,
    TechnicianDashboardComponent,
    AfterComponent,
    TechnicianDashboardCardWallComponent,
    TechnicianDashboardRouterComponent,    
    BeforeComponent,
    ForemanDashboardComponent,
    ForemanDashboardCardWallComponent,
    ForemanDashboardRouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: 'app/:id/:access',
      component: BeforeComponent
    },
    {
      path: 'dashboard',
      component: AfterComponent,
      children: [
        {path: '', redirectTo: '/dashboard/service' , pathMatch: 'full'},
        {path: 'service', component: ServiceManagerDashboardComponent},
        {path: 'technician', component: TechnicianDashboardComponent},
        {path: 'foreman', component: ForemanDashboardComponent}
      ]
    }
    ],  { useHash: true }),
    ModalModule,
    DateTimePickerModule,
    WizardModule,
    DragulaModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
