import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-request-booking-page',
  templateUrl: './request-booking-page.component.html',
  styleUrls: ['./request-booking-page.component.scss']
})
export class RequestBookingPageComponent implements OnInit {

  tripId: string;

  subscriptions = [];


  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService, private router: Router) { }

  ngOnInit() {
    let tripSubscription = this.activatedRoute.params.subscribe(params=>this.tripId = params['id']);
    this.subscriptions.push(tripSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }


}
