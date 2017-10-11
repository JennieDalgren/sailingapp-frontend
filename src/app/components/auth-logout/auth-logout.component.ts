import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user.model';


@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.min.css']
})
export class AuthLogoutComponent implements OnInit {
  showButton: boolean = true;
  user: User;
  constructor(private auth: AuthService, private router: Router) { }


  private setUser(user: User | null) {
    this.user = user;
  }

  ngOnInit() {
    this.setUser(this.auth.getUser());
    this.auth.userChange$.subscribe((user) => {
      this.setUser(user);
    });
  }

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['/home']);
    this.showButton = false;
  }


}
