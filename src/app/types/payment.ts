import { Rent } from "./rent"

export class Payment{
  id?: number
  paymentAmount: string //хз
  paymentNumber: string
  paymentDate: string // хз
  rent: Rent

  constructor(
    id: number,
    paymentAmount: string ,//хз,
    paymentNumber: string,
    paymentDate: string, // хз,
    rent: Rent
) {
    this.id = id
    this.paymentAmount = paymentAmount
    this.paymentNumber = paymentNumber
    this.paymentDate = paymentDate
    this.rent = rent
  }
}
