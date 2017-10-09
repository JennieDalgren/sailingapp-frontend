import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {

  apiUrl = apiUrl;
  user: User;
  // formsVisible: boolean = false;

  constructor(private authService: AuthService) { }

  private setUser(user: User | null) {
    this.user = user;
  }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.setUser(user);
    });

  }

  // toggleForms() {
  //   this.formsVisible = !this.formsVisible;
  // }

}
