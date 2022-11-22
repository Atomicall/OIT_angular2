import { Client } from "./client"
import { Film } from "./film"
import { FilmCopy } from "./film-copy"
import { Office } from "./office"
import { Payment } from "./payment"

export class Rent {
  id?: number
  rentStartingDate: string // тут хз пока
  rentDuration: number
  rentStatus:RentStatus
  rentalDayPrice: string // тоже хз
  payment: Payment
  office: Office
  client: Client
  rentedFilms: Film[]
  filmCopies: FilmCopy[]

  constructor(
    id: number,
    rentStartingDate: string, // тут хз пока,
    rentDuration: number,
    rentStatus: RentStatus,
    rentalDayPrice: string, // тоже хз,
    payment: Payment,
    office: Office,
    client: Client,
    rentedFilms: Film[],
    filmCopies: FilmCopy[]
) {
    this.id = id
    this.rentStartingDate = rentStartingDate
    this.rentDuration = rentDuration
    this.rentStatus = rentStatus
    this.rentalDayPrice = rentalDayPrice
    this.payment = payment
    this.office = office
    this.client = client
    this.rentedFilms = rentedFilms
    this.filmCopies = filmCopies
  }

}

export enum RentStatus {
  BOOKED,
  CANCELED,
  ISSUED,
  RETURNED,
}
