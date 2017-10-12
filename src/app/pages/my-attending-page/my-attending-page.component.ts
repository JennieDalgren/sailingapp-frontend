import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TripService } from '../../services/trip.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

import { Trip } from '../../models/trip.model';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-my-attending-page',
  templateUrl: './my-attending-page.component.html',
  styleUrls: ['./my-attending-page.component.scss']
})

export class MyAttendingPageComponent implements OnInit {
  trips: Object[];
  tripId: string;
  userId: string;
  attending: Object[];
  loading: boolean = true;
  trip: Trip;
  user: User;
  subscriptions = [];
  type: string = "attending";

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.tripService.getAttendingTrips()
      .subscribe((data) => {
        this.attending = data;
        this.loading = false;
    });
  }
}
