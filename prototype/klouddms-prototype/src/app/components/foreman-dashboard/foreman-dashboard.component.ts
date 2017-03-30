import { Component, OnInit } from '@angular/core';
import { ForemanDashboardCardWallComponent } from '../foreman-dashboard-cardwall/foreman-dashboard-cardwall.component';
import { ForemanDashboardRouterComponent } from '../foreman-dashboard-router/foreman-dashboard-router.component';

@Component({
  selector: 'app-foreman-dashboard',
  templateUrl: './foreman-dashboard.component.html',
  styleUrls: ['./foreman-dashboard.component.css']
})
export class ForemanDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log("cookie: ", localStorage.getItem('token'));
  }

}
