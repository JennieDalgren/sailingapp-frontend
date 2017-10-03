import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-trip-page',
  templateUrl: './single-trip-page.component.html',
  styleUrls: ['./single-trip-page.component.scss']
})
export class SingleTripPageComponent implements OnInit {
  tripId: string;
  constructor(private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params=>this.tripId = params['id']);
  }

}
