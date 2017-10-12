import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnDestroy{

  user = new User({
    email: '',
    password: ''
  });

  error: string;
  message: string;
  subscriptions = [];

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.error = null;
    let authSubscription = this.auth.login(this.user).subscribe(
      (user) => {
        if(user.email){
            this.user = user,
            this.router.navigate(['/home']);
        } else {this.message}
      },
      (err) => this.error = err
    );
    this.subscriptions.push(authSubscription);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
