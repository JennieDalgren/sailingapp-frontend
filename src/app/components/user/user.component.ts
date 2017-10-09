import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload.js';

const URL = environment.apiUrl + '/auth/upload/';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userId;
  apiUrl = environment.apiUrl;
  userData: Object;

  update: boolean = false;
  saving: boolean = false;
  file: any;
  uploadRequired: boolean;

  user: User;
  subscriptions = [];

  userFormData = {
    username: '',
    bio: '',
    phoneNumber: '',
    userFileName: null,
  };

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

    this.user = this.authService.getUser();
    let subscription = this.authService.userChange$.subscribe((user) => this.user = user);
    this.subscriptions.push(subscription);
  }

  toggleForm() {
    this.update = !this.update;
  }

  private submit() {
    this.saving = true;
    this.authService.updateUser(this.userFormData).subscribe(() => {
      this.saving = false;
      this.toggleForm();
    });
  }

  // onFileChange() { this.uploadRequired = false; }

  handleUpdateUserForm(myForm) {

    const files = this.uploader.getNotUploadedItems();
    if (!files.length) {
      this.uploadRequired = true;
      return;
    }

    this.uploader.uploadAll();

    this.uploader.onCompleteItem = (item, response) => {
      let data = JSON.parse(response);
      this.userFormData.userFileName = data.userFileName;
      this.submit();
    }
  }


}
