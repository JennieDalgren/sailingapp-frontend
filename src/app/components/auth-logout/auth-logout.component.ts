import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.min.css']
})
export class AuthLogoutComponent implements OnInit, OnDestroy {
  showButton: boolean = true;
  user: User;
  subscriptions = [];

  constructor( private auth: AuthService, private router: Router) { }

  private setUser(user: User | null) {
    this.user = user;
  }

  ngOnInit() {
    this.setUser(this.auth.getUser());
    let userSubscription = this.auth.userChange$.subscribe((user) => {
      this.setUser(user);
    });
    this.subscriptions.push(userSubscription);
  }
  // get rid of the navigate?
  logout() {
    let authSubscription = this.auth.logout().subscribe(()=>{
      this.router.navigate(['/home']);
    });
    this.showButton = false;
    this.subscriptions.push(authSubscription);
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
