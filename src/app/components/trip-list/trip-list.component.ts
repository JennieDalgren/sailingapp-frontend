import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})

export class TripListComponent implements OnInit {
  @Input() trips: Object[];
  @Input() type: string;

  apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {

  }

  handleConfirm(){

  }
}
