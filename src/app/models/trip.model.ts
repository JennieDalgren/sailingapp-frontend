export class Trip {
  id: string;
  name: string;
  boat: string;
  host: string;
  description: string;
  startLocation: string;
  endLocation: string;
  startDate: any;
  endDate: any;
  bookings: Array<any>;
  photos: Array<any>;


  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
