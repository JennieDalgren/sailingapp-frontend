import { Component, OnInit, Input} from '@angular/core';
import { TripService } from '../../services/trip.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  userId: string;
  trips: Object[];


  constructor(private tripService: TripService) { }

  ngOnInit() {
    // let tripSubscription = this.ActivatedRoute.params.subscribe(params=>this.tripId = params['id']);
    // this.tripService.getHostedTrips()
    //   .subscribe((data) => {
    //     this.trips = data;
    // });
  }

}
