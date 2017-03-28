import { Component, OnInit } from '@angular/core';
import { TechnicianDashboardCardWallComponent } from '../technician-dashboard-cardwall/technician-dashboard-cardwall.component';
import { TechnicianDashboardRouterComponent } from '../technician-dashboard-router/technician-dashboard-router.component';

@Component({
  selector: 'app-technician-dashboard',
  templateUrl: './technician-dashboard.component.html',
  styleUrls: ['./technician-dashboard.component.css']
})
export class TechnicianDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log("cookie: ", localStorage.getItem('token'));
  }

}
