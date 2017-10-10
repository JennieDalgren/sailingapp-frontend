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

  private trip: Trip;


  constructor(private http: Http) { }

  setTrip() : Trip {
    return this.trip;
  }

  getTripList(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl, options)
      .map((res: Response) => res.json());
  }

  getTrip(id: string){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(`http://localhost:3000/trips/${id}`, options)
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

  requestBooking(booking, bookingId) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(`http://localhost:3000/trips/${bookingId}`, booking, options)
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

  confirmBooking(bookingId){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(`http://localhost:3000/trips/${bookingId}`, options)
    .map((res: Response) => {
       return res.json()
    })
  }
}
