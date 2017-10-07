import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';


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
  booked: boolean = false;

  constructor(private tripService: TripService,) { }

  ngOnInit() {
  }

  handleRequestBooking(bookingForm) {
    this.tripService.requestBooking(this.bookingFormData, this.tripId).subscribe()
  }

}
