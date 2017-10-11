export class User {
  id: string;
  name: string;
  password: string;
  email: string;
  bio: string;
  phoneNumber: string;
  photo: any;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
