import { FilmCopy } from './film-copy';
import { Rent } from './rent';

export class Office {
  id?: number;
  addressCity: string;
  filmsInOffice: FilmCopy[];
  rentSet: Rent[];

  constructor(
    id: number,
    addressCity: string,
    filmsInOffice: FilmCopy[],
    rentSet: Rent[]
  ) {
    this.id = id;
    this.addressCity = addressCity;
    this.filmsInOffice = filmsInOffice;
    this.rentSet = rentSet;
  }
}
