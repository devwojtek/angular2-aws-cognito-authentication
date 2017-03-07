import {Part} from './part';

export class ServiceTicket {
	constructor(
		public id : number, 
		public customerName : string, 
		public vehicle: string, 
		public vin : string, 
		public time: string, 
		public timeRemaining : string, 
		public advisor : string, 
		public technician : string, 
		public parts: Array<Part>) 
		{
		
		}
}
