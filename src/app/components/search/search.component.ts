import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { TripService } from '../../services/trip.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onSearchUpdated = new EventEmitter<string>();
  trips: Object[];
  searchTerm: string;
  filteredTrips: Object[] = [];

  constructor(private tripService: TripService ) { }

  ngOnInit() {

  }

  updateFilteredTripList() {
    this.onSearchUpdated.emit(this.searchTerm);
  }

}
