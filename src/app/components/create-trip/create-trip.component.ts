import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  startLocation: string;
  endLocation: string;
  name: string;
  desciption: string;
  price: string;
  availableSpots: number;
  values: any;
  formValue: Object = {};

  constructor(private tripService: TripService) { }

  ngOnInit() {
  }

  handleCreateTripForm(myForm) {
    this.formValue = myForm.value
    this.tripService.insertNew(this.formValue).
     subscribe((value) => {
       return this.values = value;
     })
    
  }
}
