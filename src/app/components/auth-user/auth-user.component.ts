import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {

  apiUrl = apiUrl;
  user: User;
  subscriptions = [];

  constructor(private authService: AuthService) { }

  private setUser(user: User | null) {
    this.user = user;
  }

  ngOnInit() {
    this.setUser(this.authService.getUser());
    let authSubscription = this.authService.userChange$.subscribe((user) => {
      this.setUser(user);
    });
    this.subscriptions.push(authSubscription);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
