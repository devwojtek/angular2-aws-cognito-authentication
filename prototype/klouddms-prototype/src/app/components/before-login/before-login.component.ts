import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-before-login',
  template: '<div></div>',
})
export class BeforeComponent implements OnInit {
  title = 'app works!';

  constructor(
  	public auth: AuthService, 
  	public activatedRoute: ActivatedRoute,
    public router: Router) {  	
  }

  ngOnInit() {
  	if(this.activatedRoute.url['_value'].length == 1) return;

  	this.activatedRoute.params.subscribe((params: Params) => {
  		console.log(params);
  		console.log("params: ", params['id'] == null || params['id'] == undefined);

  		if(params['id'] == null || params['access'] == undefined || params['id'] == "undefined" || params['access'] == "undefined"){
  			if(this.auth.isLogged() == false) {
		  		window.location.href = this.auth.getAuthServerUrl();
		  	}  			
  		} else {
  			this.auth.setAuth(params['id'], params['access']);	
        this.router.navigate(['dashboard']);
  		}        
    });
  }
}



