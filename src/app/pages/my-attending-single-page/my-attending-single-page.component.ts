import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-attending-single-page',
  templateUrl: './my-attending-single-page.component.html',
  styleUrls: ['./my-attending-single-page.component.scss']
})
export class MyAttendingSinglePageComponent implements OnInit {

  tripId: string;
  subscriptions = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let tripSubscription = this.activatedRoute.params.subscribe(params=>this.tripId = params['id']);
    this.subscriptions.push(tripSubscription);
  }
}
