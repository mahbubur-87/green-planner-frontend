import { Component, OnInit } from '@angular/core';
interface Travel {
  id?: number;
  name?: string;
  country?: string;
  date?: string;
  challenge?: string;
  status?: string;
}
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styles:[
    `
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
        }

        @media screen and (max-width: 64em) {
            :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
                top: 0px;
            }
        }
  `  ]
})

export class ProfilePageComponent implements OnInit{
  selectedChallenge: string[] = [];
  travels: Travel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.travels = [
      {
        id: 1,
        name: 'Business travel',
        country: 'France',
        date: '2020-01-01',
        challenge: '20',
        status: '-80% CO2'
      },
      {
        id: 2,
        name: 'Leisure travel',
        country: 'Spain',
        date: '2021-06-05',
        challenge: '5',
        status: '-18% CO2'
      },
      {
        id: 3,
        name: 'Leisure travel',
        country: 'Italy',
        date: '2022-01-01',
        challenge: '7',
        status: '-40% CO2'
      },
      {
        id: 4,
        name: 'Leisure travel',
        country: 'Greece',
        date: '2020-01-01',
        challenge: '9',
        status: '-32% CO2'
      },
      {
        id: 5,
        name: 'Business travel',
        country: 'Germany',
        date: '2022-01-10',
        challenge: '15',
        status: '-50% CO2'
      },
      {
        id: 6,
        name: 'Business travel',
        country: 'France',
        date: '2020-02-01',
        challenge: '6',
        status: '-5% CO2'
      },
      {
        id: 7,
        name:'Business travel',
        country: 'Switzerland',
        date: '2020-03-25',
        challenge: '15',
        status: '-30% CO2'
      }
      ];
  }

}
