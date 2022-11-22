export class AgeConstraint{
  id? : number;
  allowedAge : number;
  constraintTitle : string;

  constructor(id: number, allowedAge: number, constraintTitle: string) {
    this.id = id
    this.allowedAge = allowedAge
    this.constraintTitle = constraintTitle
  }
}
