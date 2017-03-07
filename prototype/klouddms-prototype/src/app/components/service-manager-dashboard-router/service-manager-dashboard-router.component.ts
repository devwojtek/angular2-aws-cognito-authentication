import { Component, OnInit } from '@angular/core';
import {Part} from '../../models/part';
import {ServiceTicket} from '../../models/service-ticket';
import {TicketContainer} from '../../models/ticket-container';

@Component({
  selector: 'app-service-manager-dashboard-router',
  templateUrl: './service-manager-dashboard-router.component.html',
  styleUrls: ['./service-manager-dashboard-router.component.css']
})
export class ServiceManagerDashboardRouterComponent implements OnInit {

	containers: Array<TicketContainer> = [];

  constructor() { 
  
	this.containers = [
			new TicketContainer('appointments', 'Preprints', 
			[
				new ServiceTicket(
					12,
					"Michael Westen",
					"2017 Honda Odyssey EX-L",
					"5FNRL5H6XHB006972", 
					"3:00 p.m.", 
					"0 minutes", 
					"Marcus Aman",
					null,
					null
				),
				new ServiceTicket(
					13,
					"Sam Axe",
					"2017 Honda Accord SL",
					"5FNRL5H6XHB006972", "4:17p.m.", "90 minutes", "Archie Rival", null, [new Part(100, 'brakes pads'), new Part(101, 'oil'), new Part(102, 'oil filter')]
				),
				new ServiceTicket(
					14,
					"Fiona Glennanne",
					"2017 Honda Civic EX-L",
					"5FNRL5H6XHB006972", "4:30 p.m.", null, "Marcus Aman", null, null
				),
			new ServiceTicket(15, "Nate Westen", "2008 Honda Acura", "vin", "4:30p.m.", null, "James Retiring", null, null),
			new ServiceTicket(16, "Pete Seymour", "2015 GMC Yukon Denali XL", "vin", "2:00 p.m.", "10 minutes", "Simon Aspirer","Larry Shapiro", null), 
			new ServiceTicket(17, "Matthew Blackmon", "1993 Ford Probe GT", "vin", "2:30 p.m.", "55 minutes", "Joe Newbie", null, null)
			
			], ['appointments','serviceEstimate']),
			new TicketContainer('serviceEstimate', 'Advisor', [],['serviceEstimate','parts','multipoint','serviceFloor','invoice']),
			new TicketContainer('parts', 'Parts', [], ['parts']),
			new TicketContainer('multipoint', 'Multipoint', [],['multipoint']),
			new TicketContainer('servicefloor', 'Servicing', [],['serviceFloor','invoice']),
			new TicketContainer('invoice', 'Invoice', [],['invoice'])
		];
  
  
  }

  ngOnInit() {
  }
  
  	allowDropFunction(zone: string) : ( dragData : any) => boolean {
		return (dragData : any)  => 	dragData.nextZones.contains(zone);
		
	}

}
