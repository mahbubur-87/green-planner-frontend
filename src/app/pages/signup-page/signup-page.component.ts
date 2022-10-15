import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {TicketService} from './ticketservice';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})

export class SignupPageComponent implements OnInit {

  items: MenuItem[] = [];

  subscription: Subscription = new Subscription;

  constructor(public messageService: MessageService, public ticketService: TicketService) {

  }

  ngOnInit() {
    this.items = [{
      label: 'Personal',
      routerLink: 'personal'
    },
      {
        label: 'Goals',
        routerLink: 'more'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];

    this.subscription = this.ticketService.signupComplete$.subscribe((personalInformation) =>{
      this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
