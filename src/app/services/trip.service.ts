import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Trip } from '../models/trip.model';

const apiUrl = environment.apiUrl + '/trips/';

@Injectable()
export class TripService {
  new: any = {};

  constructor(private http: Http) { }

  getTripList(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl, options)
      .map((res: Response) => res.json());
  }

  getTrip(id: string){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `${id}`, options)
      .map((res: Response) => res.json());
  }

  insertNew(trip) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl, trip, options)
    .map((res: Response) => {
       return res.json()
    })
  }

  requestBooking(booking, tripId) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + `${tripId}`, booking, options)
    .map((res: Response) => {
       return res.json()
    })
  }

  getHostedTrips(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + 'hosted', options)
      .map((res: Response) => res.json());
  }

  getAttendingTrips(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + 'attending', options)
      .map((res: Response) => res.json());
  }

  confirmBooking(tripId, bookingId, status){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `${tripId}/booking/${bookingId}/${status}`, options)
    .map((res: Response) => {
       return res.json()
    })
  }
}
