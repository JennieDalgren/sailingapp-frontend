import { Component, OnInit, Input} from '@angular/core';
import { User } from '../../models/user.model';




@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  tripId: string;
  userId: string;
  hosted: Object;
  attending: Object;
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
