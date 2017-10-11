import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-my-hosted-single-page',
  templateUrl: './my-hosted-single-page.component.html',
  styleUrls: ['./my-hosted-single-page.component.scss']
})
export class MyHostedSinglePageComponent implements OnInit, OnDestroy {

  subscriptions = [];
  trip: Trip;

  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    let tripSubscription = this.activatedRoute.params.subscribe(params => {
      this.tripService.getTrip(params['id']).subscribe((data) => this.trip = data);
    });
    this.subscriptions.push(tripSubscription);
  }

  handle(booking, status) {
    booking.processing = true;
    booking.confirming = status === 'confirmed';
    booking.rejecting = status === 'rejected';
    console.log(this.trip.id, booking._id);

    this.tripService.confirmBooking(this.trip.id, booking._id, status).subscribe(() => {
      booking.status = status;
      booking.processing = false;
      booking.confirming = false;
      booking.rejecting = false;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
