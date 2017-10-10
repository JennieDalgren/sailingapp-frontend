import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-attending-single-page',
  templateUrl: './my-attending-single-page.component.html',
  styleUrls: ['./my-attending-single-page.component.scss']
})
export class MyAttendingSinglePageComponent implements OnInit {

  user: User;
  tripId: string;
  subscriptions = [];

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  private setUser(user: User | null) {
    if (this.user) {
      let tripSubscription = this.activatedRoute.params.subscribe(params=>this.tripId = params['id']);
      this.subscriptions.push(tripSubscription);

      // load this.trip
        // this.myBooking = this.trip.bookings.find((booking) => booking.userId._id  === this.user.id)

    }
  }

  ngOnInit() {
    this.setUser(this.authService.getUser());
    this.authService.userChange$.subscribe((user) => {
      this.setUser(user);
    });
  }
}

// 
//
//
// <div *ngIf="trip && myBooking.status = 'pending'">
//   Sonot yet, mate
// </div>
// <div *ngIf="trip && myBooking.status = 'rejected'">
//   Sorry
// </div>
// <div *ngIf="trip && myBooking.status = 'confirmed'">
//   You have been confirmed.
//   <div *ngIf="trip.bookings.length > 1" class="header-somthing">more people are attending</div>
//   <div *ngFor="let booking of trip.bookings" *ngIf="booking._id !== myBooking._id">
//     {{booking.message}}
//     {{booking.userId.name}}
//     <div *ngIf="booking.status === 'accepted'">
//       Yeah Accepted
//     </div>
//   </div>
// </div>
