import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload.js';

const baseUrl = 'http://localhost:3000';
const URL = baseUrl + '/trips/upload/';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  file: any;
  uploadRequired: boolean;

  formData = {
    startDate: null,
    endDate: null,
    startLocation: '',
    endLocation: '',
    name: '',
    desciption: '',
    price: '',
    availableSpots: 1,
    fileName: null,
  };

  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  private submit() {
    this.tripService.insertNew(this.formData).
     subscribe((newTrip) => {
       //navigate (router go((['/trips', newTrip.id])))
       console.log('router go to /trips', newTrip.id, 'pleäse!');
     })
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
