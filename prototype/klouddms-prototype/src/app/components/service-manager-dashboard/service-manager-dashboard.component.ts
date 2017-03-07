import { Component, OnInit } from '@angular/core';
import { ServiceManagerDashboardCardwallComponent } from '../service-manager-dashboard-cardwall/service-manager-dashboard-cardwall.component';
import { ServiceManagerDashboardRouterComponent } from '../service-manager-dashboard-router/service-manager-dashboard-router.component';

@Component({
  selector: 'app-service-manager-dashboard',
  templateUrl: './service-manager-dashboard.component.html',
  styleUrls: ['./service-manager-dashboard.component.css']
})
export class ServiceManagerDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log("cookie: ", localStorage.getItem('token'));
  }

}
