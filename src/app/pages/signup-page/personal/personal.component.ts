import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TicketService} from '../ticketservice';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalInformation: any;

  submitted: boolean = false;

  constructor(public ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.personalInformation = this.ticketService.getTicketInformation().personalInformation;

  }
  nextPage() {
    if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
      this.ticketService.ticketInformation.personalInformation = this.personalInformation;
      this.router.navigate(['Signup/more']);

      return;
    }

    this.submitted = true;
  }

}
