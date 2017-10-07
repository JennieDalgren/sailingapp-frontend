import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environments/environment';


import { FileUploader } from 'ng2-file-upload/ng2-file-upload.js';

const URL = environment.apiUrl + '/trips/upload/';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  file: any;
  uploadRequired: boolean;
  userData: Object;

  formData = {
    startDate: null,
    endDate: null,
    startLocation: '',
    endLocation: '',
    boat: '',
    name: '',
    desciption: '',
    price: '',
    availableSpots: 1,
    fileName: null,
  };

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private tripService: TripService, private authService: AuthService) { }

  // private setUser(user: User | null) {
  //   this.user = user;
  // }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

    // this.authService.userChange$.subscribe((user) => {
    //   this.setUser(user)
    // });
  }

  private submit() {

    this.tripService.insertNew(this.formData).subscribe();
  }

  // onFileChange() { this.uploadRequired = false; }

    handleCreateTripForm(myForm) {

      const files = this.uploader.getNotUploadedItems();
      if (!files.length) {
        this.uploadRequired = true;
        return;
      }

      this.uploader.uploadAll();

      this.uploader.onCompleteItem = (item, response) => {
        let data = JSON.parse(response);
        this.formData.fileName = data.fileName;
        this.submit();
      }
    }


}
