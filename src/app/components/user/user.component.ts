import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

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
  file: any;
  uploadRequired: boolean;
  userData: Object;

  userFormData = {
    username: '',
    bio: '',
    phoneNumber: '',
    email: '',
    paymentInfo: '',
    userFileName: null,
  };

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  private submit() {

    this.userService.updateUser(this.userId, this.userFormData).subscribe();
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
