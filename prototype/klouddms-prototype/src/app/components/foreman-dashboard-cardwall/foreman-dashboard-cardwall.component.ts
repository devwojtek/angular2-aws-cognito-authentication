import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreman-dashboard-cardwall',
  templateUrl: './foreman-dashboard-cardwall.component.html',
  styleUrls: ['./foreman-dashboard-cardwall.component.css']
})
export class ForemanDashboardCardWallComponent implements OnInit {
	
	constructor() { }

	ngOnInit() {
		// console.log("cookie: ", localStorage.getItem('token'));
	}
}
