import { Component, Input, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { environment } from '../../../environments/environment';

import { Trip } from '../../models/trip.model';

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
