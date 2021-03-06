import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TripService } from '../../services/trip.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user.model';
import { Trip } from '../../models/trip.model';


@Component({
  selector: 'app-my-hosted-page',
  templateUrl: './my-hosted-page.component.html',
  styleUrls: ['./my-hosted-page.component.scss']
})

export class MyHostedPageComponent implements OnInit {
  trips: Object[];
  tripId: string;
  userId: string;
  hosted: Object[];
  loading: boolean = true;
  trip: Trip;
  user: User;
  subscriptions = [];
  type: string = "host";

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let tripSubscription = this.tripService.getHostedTrips()
      .subscribe((data) => {
        this.hosted = data;
        this.loading = false;
    });
    this.subscriptions.push(tripSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
