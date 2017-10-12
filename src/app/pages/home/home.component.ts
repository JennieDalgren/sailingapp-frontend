import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { Trip } from '../../models/trip.model';
import { User } from '../../models/user.model';

const SEARCH_DELAY = 300;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searching: boolean;
  trips: Trip[];
  allTrips: Trip[];
  loading: boolean = true;
  user: User;
  type: string = 'all';

  constructor(private tripService: TripService, private auth: AuthService) { }

  ngOnInit() {

    this.user = this.auth.getUser();
    this.tripService.getTripList()
      .subscribe((data) => {
        this.allTrips = data;
        this.trips = data;
        this.loading = false;
    });
  }

  handleSearchUpdated(searchTerm) {
    const myPattern = new RegExp(searchTerm, 'i');
    this.trips = [];
    this.searching = true;
    // setTimeout(() => {
      this.trips = this.allTrips.filter((item) => {
        if (item.startLocation && item.startLocation.match(myPattern)) {
          return true;
        }
        if (item.endLocation && item.endLocation.match(myPattern)) {
          return true;
        }
      });
      this.searching = false;
    // }, SEARCH_DELAY);
  }

}
