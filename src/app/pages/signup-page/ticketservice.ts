import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TicketService {

  ticketInformation = {
    personalInformation: {
      firstname: '',
      lastname: '',
      age: null
    },
    moreInformation: {
      class: null,
      wagon: null,
      seat: null
    }
  };

  private signupComplete = new Subject<any>();

  signupComplete$ = this.signupComplete.asObservable();

  getTicketInformation() {
    return this.ticketInformation;
  }

  setTicketInformation(ticketInformation:any) {
    this.ticketInformation = ticketInformation;
  }

  complete() {
    this.signupComplete.next(this.ticketInformation.personalInformation);
  }


}
