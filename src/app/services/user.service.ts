import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  new: any = {};

  constructor(private http: Http) { }

  updateUser(user){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.put('http://localhost:3000/auth/me', user, options)
    .map((res: Response) => {
       return res.json()
    })
  }

}
