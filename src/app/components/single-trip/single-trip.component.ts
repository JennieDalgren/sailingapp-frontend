import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.scss']
})
export class SingleTripComponent implements OnInit {

  @Input() trip: Trip;
  apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {
  }

}
