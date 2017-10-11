import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip.model';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-request-booking',
  templateUrl: './request-booking.component.html',
  styleUrls: ['./request-booking.component.scss']
})
export class RequestBookingComponent implements OnInit {
  @Input() tripId;

  bookingFormData = {
    guestCount: 1
  };

  trip: Trip;
  user: User;

  constructor(private auth: AuthService, private tripService: TripService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.tripService.getTrip(this.tripId).subscribe((data) => this.trip = data);

  }

  handleRequestBooking(bookingForm) {
    this.tripService.requestBooking(this.tripId, this.bookingFormData).subscribe()
    this.router.navigate(['/my-attending']);
  }


}
