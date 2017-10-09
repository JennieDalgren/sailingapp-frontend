import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trips: Object[];
  loading: boolean = true;
  user: User;

  constructor(private tripService: TripService, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.tripService.getTripList()
      .subscribe((data) => {
        this.trips = data;
        this.loading = false;
    });
  }

  handleSearchUpdated(searchTerm) {
    this.tripService.getTripList().subscribe((list) => {
      const myPattern = new RegExp(searchTerm, 'i');
      this.trips = list.filter((item) => item.startLocation.match(myPattern));
    })
  }

}
