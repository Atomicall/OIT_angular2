import { Film } from "./film"

export class PublishingCompany{
  id?: number
  companyTitle: string
  films: Film[]

  constructor(id: number, companyTitle: string, films: Film[]) {
    this.id = id
    this.companyTitle = companyTitle
    this.films = films
  }
}
