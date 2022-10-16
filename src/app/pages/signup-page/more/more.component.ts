import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TicketService} from '../ticketservice';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(public ticketService: TicketService, private router: Router) { }

  classes: any[]=[];

  vagons: any[] = [];

  mores: any[] = [];

  moreInformation: any;

  ngOnInit() {
    this.moreInformation = this.ticketService.ticketInformation.moreInformation;

    this.classes = [
      {name: 'First Class', code: 'A', factor: 1},
      {name: 'Second Class', code: 'B', factor: 2},
      {name: 'Third Class', code: 'C', factor: 3}
    ];
  }

  setVagons(event:any) {
    if (this.moreInformation.class && event.value) {
      this.vagons = [];
      this.mores = [];
      for (let i = 1; i < 3 * event.value.factor; i++) {
        this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
      }
    }
  }

  setmores(event:any) {
    if (this.moreInformation.wagon && event.value) {
      this.mores = [];
      for (let i = 1; i < 10 * event.value.factor; i++) {
        this.mores.push({more: i, type: event.value.type});
      }
    }
  }

  nextPage() {
    if (this.moreInformation.class && this.moreInformation.more && this.moreInformation.wagon) {
      this.ticketService.ticketInformation.moreInformation = this.moreInformation;
      this.router.navigate(['Signup/confirmation']);
    }
  }

  prevPage() {
    this.router.navigate(['Signup/personal']);
  }

}
