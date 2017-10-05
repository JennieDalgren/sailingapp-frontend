import { Component, Input, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss']
})
export class SingleTripComponent implements OnInit {

  @Input() tripId: string;
  trip: Object = {};
  apiUrl = environment.apiUrl;

  constructor(private TripService: TripService) { }

  ngOnInit() {
    this.TripService.getTrip(this.tripId).subscribe((data) => this.trip = data);
  }

}
