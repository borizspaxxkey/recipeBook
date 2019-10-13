import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://media.gettyimages.com/photos/the-city-of-dreams-new-york-citys-skyline-at-twilight-picture-id599766748?s=2048x2048',
      149.99),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A Romantic place in Paris!',
      'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=2048x2048',
      189.99),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://media.gettyimages.com/photos/sunbeams-in-dark-and-foggy-autumn-forest-picture-id615101444?s=612x612',
      99.99)
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }
}
