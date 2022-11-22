import { Rent } from './rent';

export class Client {
  id?: number;
  firstName: string;
  lastName: string;
  passportNumber: string;
  rentSet: Rent[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    passportNumber: string,
    rentSet: Rent[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.passportNumber = passportNumber;
    this.rentSet = rentSet;
  }
}
