import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onSearchUpdated = new EventEmitter<string>();
  searchTerm: string;

  constructor() { }

  ngOnInit() {

  }

  updateFilteredTripList() {
    this.onSearchUpdated.emit(this.searchTerm);
  }

}
