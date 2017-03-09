import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-service-top-menu',
  templateUrl: './service-top-menu.component.html',
  styleUrls: ['./service-top-menu.component.css']
})
export class ServiceTopMenuComponent implements OnInit {

  _form: any;
  options: any;
  showDatePicker: boolean;
  cardData: any;

  @ViewChild('myModal') myModal: any;

  constructor() { 
  	this.options = [
  		{value: 'name',  display: 'Name'},
  		{value: 'email', display: 'Email Address'},
  		{value: 'vin', 	 display: 'Vehicle vin Number'}
  	];

  	this._form = {
  		step1: {},
  		step2: {},
  		step3: {},
  		step4: {}
  	}

  	this.cardData = [
  		{label: "First Card", content: "This is first Card"},
  		{label: "Second Card", content: "This is second Card"},
  		{label: "Third Card", content: "This is third Card"},
  		{label: "Fourth Card", content: "This is fourth Card"},
  	]
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

  getPlaceHolderString(option: string) {
  	let placeholder = '';
  	switch (option) {
  		case "undefined":
  			placeholder = "";
  			break;
  		case "name":
  			placeholder = "Please provide your name";
  			break;
  		case "email":
  			placeholder = "Please provide your email";
  			break;
  		case "vin":
  			placeholder = "Please provide a vehicle vin Number";
  			break;
  		default:
  			placeholder = "";
  			break;
  	};
  	return placeholder;
  }

	getDisplayString(option: string) {
		this.options.forEach((opt) => {
			if(opt.value == option) return opt.display;
		});
	}

	toggleDatePicker(status: boolean): void  {
	    this.showDatePicker = status;
	}

	setDate(date: any): void {
	    this._form.step4.date = date;
	}

	onComplete(e) {
		this.myModal.close();
	}

	stepChanged(e) {
		console.log(e);
		e.showPrev = false
	}
}
