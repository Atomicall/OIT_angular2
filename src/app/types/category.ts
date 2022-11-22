import { AgeConstraint } from "./age-constraints";

export class Category{
  id? : number;
  categoryTitle : string;
  ageConstraint : AgeConstraint;

  constructor(id: number, categoryTitle: string, ageConstraint: AgeConstraint) {
    this.id = id
    this.categoryTitle = categoryTitle
    this.ageConstraint = ageConstraint
  }
}
