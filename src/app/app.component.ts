import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})

export class AppComponent implements OnInit {

  constructor(private session: AuthService) { }
    ngOnInit() {
      this.session.me().subscribe()
    }
}
