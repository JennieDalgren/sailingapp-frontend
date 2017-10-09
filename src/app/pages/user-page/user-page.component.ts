import { Component, OnInit, Input} from '@angular/core';
import { TripService } from '../../services/trip.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {


  tripId: string;
  userId: string;
  hosted: Object;
  attending: Object;

  user: User;
  subscriptions = [];
  constructor(private activatedRoute: ActivatedRoute, private tripService: TripService, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {

    
  }

}
