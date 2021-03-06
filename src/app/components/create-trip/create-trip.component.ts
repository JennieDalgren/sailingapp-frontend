import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  subscriptions = [];

  formData = {
    startDate: null,
    endDate: null,
    startLocation: '',
    endLocation: '',
    boat: '',
    name: '',
    description: '',
    price: '',
    startingSpots: 1,
    availableSpots: 1,
    photos: null,
  };

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private tripService: TripService, private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

  }

  private submit() {
    this.formData.availableSpots = this.formData.startingSpots
    let tripSubscription = this.tripService.insertNew(this.formData).subscribe(() => {
      this.router.navigate(['/my-hosted']);
    });
    this.subscriptions.push(tripSubscription);
  }


  handleCreateTripForm(myForm) {
    const files = this.uploader.getNotUploadedItems();
    if (!files.length) {
      this.uploadRequired = true;
      return;
    }

    this.uploader.uploadAll();

    const photos = []

    this.uploader.onCompleteItem = (item, response) => {
      let data = JSON.parse(response);
      photos.push(data.fileName);
    }

    this.uploader.onCompleteAll = () => {
      this.formData.photos = photos;
      this.submit();
    }
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
