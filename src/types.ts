export class IUser {
  id: string;
  firstName: string;
  lastName: string;

  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
