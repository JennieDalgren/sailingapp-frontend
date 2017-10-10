import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-my-hosted-single-page',
  templateUrl: './my-hosted-single-page.component.html',
  styleUrls: ['./my-hosted-single-page.component.scss']
})
export class MyHostedSinglePageComponent implements OnInit {

  tripId: string;
  subscriptions = [];
  trip: Trip;

  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    let tripSubscription = this.activatedRoute.params.subscribe(params=>{
      this.tripId = params['id'];
      this.tripService.getTrip(this.tripId).subscribe((data) => this.trip = data);
    });
    this.subscriptions.push(tripSubscription);
  }

  confirm(booking) {
    booking.processing = true;
    booking.confirming = true;
    console.log(this.trip.id, booking._id);

    this.tripService.confirmBooking(this.trip.id, booking._id).subscribe();


        // call the service to update booking status   someMethod(this.trip.id, booking._id, 'confirmed'); -> http.put(....., {status : }
    // .susbscribe(() => {
    //   booking.processing = false;
    //   booking.confirming = false;
    //   booking.status  = 'confirmed';
    // //});
  }
}
