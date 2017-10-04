export class User {
  id: string;
  name: string;
  email: string;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
