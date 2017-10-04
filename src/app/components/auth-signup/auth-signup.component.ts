import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})

export class AuthSignupComponent {

  user = new User({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  error: string;

  constructor(private auth: AuthService) { }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }
}
