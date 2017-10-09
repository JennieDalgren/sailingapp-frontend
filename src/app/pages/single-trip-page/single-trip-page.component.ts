import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-single-trip-page',
  templateUrl: './single-trip-page.component.html',
  styleUrls: ['./single-trip-page.component.scss']
})
export class SingleTripPageComponent implements OnInit, OnDestroy {
  tripId: string;
  user: User;
  subscriptions = [];

  constructor(private ActivatedRoute: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {

    this.user = this.auth.getUser();
    let tripSubscription = this.ActivatedRoute.params.subscribe(params=>this.tripId = params['id']);
    let userSubscription = this.auth.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(tripSubscription);
    this.subscriptions.push(userSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
