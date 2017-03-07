import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServiceTopMenuComponent } from '../service-top-menu/service-top-menu.component';
import { ServiceSideMenuComponent } from '../service-side-menu/service-side-menu.component';
import { ServiceManagerDashboardComponent } from '../service-manager-dashboard/service-manager-dashboard.component';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
})
export class AfterComponent implements OnInit {
  title = 'app works!';

  constructor(
  	public auth: AuthService, 
  	public activatedRoute: ActivatedRoute,
    public router: Router) {  	
  }

  ngOnInit() {
  	if(this.auth.isLogged() == false) {
      window.location.href = this.auth.getAuthServerUrl();
    }
  }
}