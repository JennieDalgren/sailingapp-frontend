import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-booking-page',
  templateUrl: './request-booking-page.component.html',
  styleUrls: ['./request-booking-page.component.scss']
})
export class RequestBookingPageComponent implements OnInit {

  @Input() tripId;
  bookingFormData = {
    guestCount: 1
  };
  booked: boolean = false;

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }



}
