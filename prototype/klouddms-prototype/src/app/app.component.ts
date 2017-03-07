import { Component, OnInit } from '@angular/core';

import { AuthService } from './service/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
  	public auth: AuthService, 
  	public activatedRoute: ActivatedRoute) {  	
  }
}



