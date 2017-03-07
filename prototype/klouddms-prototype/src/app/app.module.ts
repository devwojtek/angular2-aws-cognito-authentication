import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';

import { FormWizardModule } from 'angular2-wizard';
import { ModalModule } from "ng2-modal";
import { DateTimePickerModule } from 'ng2-date-time-picker';
import {WizardModule} from "ng2-archwizard/dist";

import { AppComponent } from './app.component';
import { AfterComponent } from './components/after-login/after-login.component';
import { BeforeComponent } from './components/before-login/before-login.component';
import { ServiceTopMenuComponent } from './components/service-top-menu/service-top-menu.component';
import { ServiceSideMenuComponent } from './components/service-side-menu/service-side-menu.component';
import { ServiceManagerDashboardCardwallComponent } from './components/service-manager-dashboard-cardwall/service-manager-dashboard-cardwall.component';
import { ServiceManagerDashboardRouterComponent } from './components/service-manager-dashboard-router/service-manager-dashboard-router.component';
import { ServiceManagerDashboardComponent } from './components/service-manager-dashboard/service-manager-dashboard.component';

import { AuthService } from './service/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    ServiceTopMenuComponent,
    ServiceSideMenuComponent,
    ServiceManagerDashboardCardwallComponent,
    ServiceManagerDashboardRouterComponent,
    ServiceManagerDashboardComponent,
    AfterComponent,
    BeforeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'app/:id/:access',
      component: BeforeComponent
    },
    {
      path: 'dashboard',
      component: AfterComponent
    }
    ]),
  	DndModule.forRoot(),
    ModalModule,
    DateTimePickerModule,
    WizardModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
