import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';




@Component({
  selector: 'app-other-user',
  templateUrl: './other-user.component.html',
  styleUrls: ['./other-user.component.scss']
})
export class OtherUserComponent implements OnInit {
  @Input() user: User;
  apiUrl = environment.apiUrl;
  
  constructor() { }

  ngOnInit() {

  }

}
