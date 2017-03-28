import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technician-dashboard-cardwall',
  templateUrl: './technician-dashboard-cardwall.component.html',
  styleUrls: ['./technician-dashboard-cardwall.component.css']
})
export class TechnicianDashboardCardWallComponent implements OnInit {
	
	myDatePickerOptions:any = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'su',
        sunHighlight: true,
        height: '34px',
        width: '375px',
        inline: true
    };

	constructor() { }

	ngOnInit() {
		// console.log("cookie: ", localStorage.getItem('token'));
	}

	onDateChanged(event:any) {
        console.log('onDateChanged(): ', 
            event.date,
            ' - formatted: ', event.formatted,
            ' - epoc timestamp: ', event.epoc,
            ' - selected week start: ', event.start,
            ' - selected week end: ', event.end);
    }

}
