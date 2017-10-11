import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl

@Injectable()
export class UserService {
  new: any = {};

  constructor(private http: Http) { }

  updateUser(user){
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.put(apiUrl + '/auth/me', user, options)
    .map((res: Response) => {
       return res.json()
    })
  }

}
