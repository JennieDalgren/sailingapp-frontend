import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Trip } from '../../models/trip.model';
@Component({
  selector: 'app-other-user-page',
  templateUrl: './other-user-page.component.html',
  styleUrls: ['./other-user-page.component.scss']
})
export class OtherUserPageComponent implements OnInit, OnDestroy {
  trip: Trip;
  user: User;
  subscriptions = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private auth: AuthService
 ) { }

  private loadUser() {
    let routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params['id']).subscribe((data) => this.user = data);
    });
    this.subscriptions.push(routeParamsSubscription);
  }

  ngOnInit() {
    this.loadUser();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
