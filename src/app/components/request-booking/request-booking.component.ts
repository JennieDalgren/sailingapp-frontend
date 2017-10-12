import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';
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
  subscriptions = [];

  constructor(private auth: AuthService, private tripService: TripService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let tripSubscription = this.tripService.getTrip(this.tripId).subscribe((data) => this.trip = data);
    this.subscriptions.push(tripSubscription);
  }

  handleRequestBooking(bookingForm) {
    let bookingSubscription = this.tripService.requestBooking(this.bookingFormData, this.trip.id).subscribe(() => {
      this.router.navigate(['/my-attending']);
    });
    this.subscriptions.push(bookingSubscription);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
