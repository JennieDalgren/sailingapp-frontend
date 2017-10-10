import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-hosted-single-page',
  templateUrl: './my-hosted-single-page.component.html',
  styleUrls: ['./my-hosted-single-page.component.scss']
})
export class MyHostedSinglePageComponent implements OnInit {

  tripId: string;
  subscriptions = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let tripSubscription = this.activatedRoute.params.subscribe(params=>this.tripId = params['id']);
    this.subscriptions.push(tripSubscription);
  }
}
