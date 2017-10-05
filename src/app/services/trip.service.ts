import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TripService {
  new: any = {};

  constructor(private http: Http) { }

  getTripList(){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get('http://localhost:3000/trips/', options)
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
    return this.http.post('http://localhost:3000/trips', trip, options)
    .map((res: Response) => {
       return res.json()
    })
  }

}
