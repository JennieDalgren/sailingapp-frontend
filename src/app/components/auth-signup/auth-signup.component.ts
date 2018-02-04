import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.min.css']
})

export class AuthSignupComponent implements OnDestroy {

  user = new User({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  error: string;
  message: string;
  subscriptions = [];

  constructor(private auth: AuthService, private router: Router) { }

  signup(){
  this.error = null;
  let authSubscription = this.auth.signup(this.user).subscribe(
    (user) => {
      if(user.email){
          this.user = user,
          this.router.navigate(['/home']);
      } else {this.message}
    },
    (err) => this.error = JSON.parse(err._body));
    this.subscriptions.push(authSubscription);

  }


  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
