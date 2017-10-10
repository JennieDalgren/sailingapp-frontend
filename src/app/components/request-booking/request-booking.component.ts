import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip.model';


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


  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
    this.tripService.getTrip(this.tripId).subscribe((data) => this.trip = data);
  }

  handleRequestBooking(bookingForm) {
    this.tripService.requestBooking(this.bookingFormData, this.tripId).subscribe()
    this.router.navigate(['/my-attending']);
  }


}
