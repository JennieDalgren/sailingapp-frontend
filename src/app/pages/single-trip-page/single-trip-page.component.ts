import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TripService } from '../../services/trip.service';
import { User } from '../../models/user.model';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-single-trip-page',
  templateUrl: './single-trip-page.component.html',
  styleUrls: ['./single-trip-page.component.scss']
})
export class SingleTripPageComponent implements OnInit, OnDestroy {
  trip: Trip;
  user: User;
  subscriptions = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private auth: AuthService
 ) { }

  private loadTrip() {
    let routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.tripService.getTrip(params['id']).subscribe((data) => this.trip = data);
    });
    this.subscriptions.push(routeParamsSubscription);
  }

  ngOnInit() {
    this.loadTrip();
    this.user = this.auth.getUser();
    let userSubscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(userSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
