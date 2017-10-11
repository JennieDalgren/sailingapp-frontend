import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TripService } from '../../services/trip.service';
import { User } from '../../models/user.model';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-my-attending-single-page',
  templateUrl: './my-attending-single-page.component.html',
  styleUrls: ['./my-attending-single-page.component.scss']
})
export class MyAttendingSinglePageComponent implements OnInit {

  user: User;
  trip: Trip;
  subscriptions = [];
  myBooking: Object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private auth: AuthService
 ) { }


 private loadTrip() {
   let routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
     this.tripService.getTrip(params['id']).subscribe((data) => {
       this.trip = data;
       this.myBooking = this.trip.bookings.find((booking) => booking.userId._id  === this.user.id)
     });
   });
   this.subscriptions.push(routeParamsSubscription);
 }

  private setUser(user: User | null) {
    this.user = user;
    if (this.user) {
      this.loadTrip();
    }
  }

  ngOnInit() {
    this.setUser(this.auth.getUser());
    this.auth.userChange$.subscribe((user) => this.setUser(user));
  }
}
