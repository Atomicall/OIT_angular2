import { Author } from "./author"
import { Category } from "./category"
import { FilmCopy } from "./film-copy"
import { PublishingCompany } from "./publishing-company"

export class Film{
  id?: number
  filmTitle: string
  filmPrice: string // хз пока
  publishingCompany: PublishingCompany
  author: Author
  filmCategories: Category[]
  filmCopies: FilmCopy[]

  constructor(
    id: number,
    filmTitle: string,
    filmPrice: string, // хз пока,
    publishingCompany: PublishingCompany,
    author: Author,
    filmCategories: Category[],
    filmCopies: FilmCopy[]
) {
    this.id = id
    this.filmTitle = filmTitle
    this.filmPrice = filmPrice
    this.publishingCompany = publishingCompany
    this.author = author
    this.filmCategories = filmCategories
    this.filmCopies = filmCopies
  }
}
