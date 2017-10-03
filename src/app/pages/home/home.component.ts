import { Component, OnInit } from '@angular/core';

import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trips: Object[];
  loading: boolean = true;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTripList()
      .subscribe((data) => {
        this.trips = data;
        this.loading = false;
    });

  }

  handleSearchUpdated(searchTerm) {
    this.tripService.getTripList().subscribe((list) => {
      const myPattern = new RegExp(searchTerm, 'i');
      this.trips = list.filter((item) => item.startLocation.match(myPattern));
    })
  }

}
