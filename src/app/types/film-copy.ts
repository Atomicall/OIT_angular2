import { Film } from './film';
import { Office } from './office';
import { Rent } from './rent';

export class FilmCopy {
  id?: number;
  filmStatus: FilmStatus;
  office: Office;
  filmData: Film;
  rents: Rent[];

  constructor(
    id: number,
    filmStatus: FilmStatus,
    office: Office,
    filmData: Film,
    rents: Rent[]
  ) {
    this.id = id;
    this.filmStatus = filmStatus;
    this.office = office;
    this.filmData = filmData;
    this.rents = rents;
  }
}

export enum FilmStatus {
  ISSUED,
  AVAILABLE,
}
