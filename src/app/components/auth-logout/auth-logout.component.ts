import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.min.css']
})
export class AuthLogoutComponent {

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['/home']);
  }

}
