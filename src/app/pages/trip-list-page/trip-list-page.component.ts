import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-list-page',
  templateUrl: './trip-list-page.component.html',
  styleUrls: ['./trip-list-page.component.scss']
})
export class TripListPageComponent implements OnInit {
  trips: Object[];
  constructor(private TripService: TripService) { }

  ngOnInit() {
    this.TripService.getTripList()
    .subscribe((data) => this.trips = data);
  }

}
