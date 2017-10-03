import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TripService {

  constructor(private http: Http) { }

  getTripList(){
    return this.http.get('http://localhost:3000/trips/')
      .map((res: Response) => res.json());
  }

  getTrip(id: string){
    return this.http.get(`http://localhost:3000/trips/${id}`)
      .map((res: Response) => res.json());
  }
}
