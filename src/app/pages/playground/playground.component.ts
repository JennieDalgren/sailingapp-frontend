import { Component, OnInit } from '@angular/core';

import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  trip: Trip;
  tripList: Object[] = [];

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTripList().subscribe((trips) => {
      this.tripList = trips;
      this.trip = trips[0];
    });
  }

}
