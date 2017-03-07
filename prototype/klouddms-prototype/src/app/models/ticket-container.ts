import {ServiceTicket} from './service-ticket';


export class TicketContainer {
 constructor(public id: string, public name: string, public tickets: Array<ServiceTicket>, public nextZones : Array<string>) {}
}
