import { Component, Input, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { Trip } from '../../models/trip.model';
import { NgSwitch } from '@angular/common';




@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss']
})
export class SingleTripComponent implements OnInit {

  @Input() tripId: string;
  trip: Trip;
  apiUrl = environment.apiUrl;
  user: User;

  constructor(private TripService: TripService, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.TripService.getTrip(this.tripId).subscribe((data) => this.trip = data);
  }

}
