import {AgeConstraint} from './age-constraints'
export class Author{
  id? : number;
  firstName : string;
  lastName : string;
  filmSet? : AgeConstraint[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    filmSet: AgeConstraint[]
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.filmSet = filmSet
  }

}
