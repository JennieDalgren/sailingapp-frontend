import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss']
})
export class SingleTripComponent implements OnInit {
  user: User;
  @Input() trip: Trip;
  apiUrl = environment.apiUrl;

  constructor(    private auth: AuthService
) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

}
