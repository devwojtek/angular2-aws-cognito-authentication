import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-service-side-menu',
  templateUrl: './service-side-menu.component.html',
  styleUrls: ['./service-side-menu.component.css']
})
export class ServiceSideMenuComponent implements OnInit {
	item: any = '';

	constructor(private router: Router,public activatedRoute: ActivatedRoute) { 
		this.item = 'dashboard'
	}

	ngOnInit() {
		if(this.router.url.includes('service')) this.item = 'service';
		if(this.router.url.includes('technician')) this.item = 'technician';
		if(this.router.url.includes('foreman')) this.item = 'foreman';
	}

	onChangeRouter(path: string) {
		this.item = path;
		switch(path) {
			case 'dashboard':
				this.router.navigate(['/dashboard']);
				break;
			case 'service':
				this.router.navigate(['/dashboard/service']);
				break;
			case 'technician':
				this.router.navigate(['/dashboard/technician']);
				break;
			case 'foreman':
				this.router.navigate(['/dashboard/foreman']);
				break;
			default:
				this.router.navigate(['/dashboard']);
				break;
		}
	}
}
