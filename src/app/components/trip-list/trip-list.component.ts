import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  @Input() trips: Object[];
  apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {

  }

}
