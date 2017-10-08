import { Component, OnInit, Input} from '@angular/core';
import { TripService } from '../../services/trip.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  tab = 3;

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }



  userId: string;
  trips: Object[];

  user: User;
  subscriptions = [];
  constructor(private tripService: TripService, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.tripService.getTripList()
      .subscribe((data) => {
        this.trips = data;
    });

    // let tripSubscription = this.ActivatedRoute.params.subscribe(params=>this.tripId = params['id']);
    // this.tripService.getHostedTrips()
    //   .subscribe((data) => {
    //     this.trips = data;
    // });
  }

}
