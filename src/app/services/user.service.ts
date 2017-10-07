import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  new: any = {};

  constructor(private http: Http) { }

  updateUser(userId, user){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post('http://localhost:3000/auth/{$userId}', user, options)
    .map((res: Response) => {
       return res.json()
    })
  }

}
