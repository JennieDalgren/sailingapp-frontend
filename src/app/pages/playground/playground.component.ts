import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  specialTripId: string = '59d243817913990695fde7e8';
  tripList: Object[] = [{
    id: '59d243817913990695fde7e8',
    startLocation: 'Barcelona',
    endLocation: 'Valencia',
    photos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Joshua_%281%29.JPG/220px-Joshua_%281%29.JPG'
    ],
    startDate: '2017-11-30T23:00:00.000Z',
    endDate: '2017-12-09T00:00:00.000Z',
    availableSpots: 4,
    host: 'User that hosts this trip',
    price: '500€',
    tripName: 'December Delirium',
    description: 'An amazing trip along the coast in Catalunia'
  }, {
    id: '59d24ae87913990695fde7ea',
    startLocation: 'Sitges',
    endLocation: 'Valencia',
    photos: null
  }, {
    id: '59d24af47913990695fde7eb',
    startLocation: 'Sitges',
    endLocation: 'Mataro',
    photos: null
  }];

  constructor() { }

  ngOnInit() {
  }

}
