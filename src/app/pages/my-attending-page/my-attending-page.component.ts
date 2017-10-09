import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-attending-page',
  templateUrl: './my-attending-page.component.html',
  styleUrls: ['./my-attending-page.component.scss']
})
export class MyAttendingPageComponent implements OnInit {
  trips: Object[];
  tripId: string;
  userId: string;
  hosted: Object;
  attending: Object;

  user: User;
  subscriptions = [];

  constructor(private activatedRoute: ActivatedRoute,
              private tripService: TripService,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.tripService.getAttendingTrips()
      .subscribe((data) => {
        this.attending = data;
    });
  }

}
