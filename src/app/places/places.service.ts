import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, filter, map, tap, delay } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // tslint:disable-next-line: variable-name
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://media.gettyimages.com/photos/the-city-of-dreams-new-york-citys-skyline-at-twilight-picture-id599766748?s=2048x2048',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'),

    new Place(
      'p2',
      'L\'Amour Toujours',
      'A Romantic place in Paris!',
      'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=2048x2048',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'),

    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://media.gettyimages.com/photos/sunbeams-in-dark-and-foggy-autumn-forest-picture-id615101444?s=612x612',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'),

  ]);

  constructor(private authService: AuthService) { }

  get places() {
    return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.places
      .pipe(take(1), map(places => {
        return { ...places.find(p => p.id === id) };
      }));
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(Math.random().toString(),
      title,
      description,
      'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=2048x2048',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places
      .pipe(
        take(1),
        delay(1000),
        tap(places => {
          this._places.next(places.concat(newPlace));
        }));
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
      const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
      const updatedPlaces = [...places];
      const oldPlace = updatedPlaces[updatedPlaceIndex];
      updatedPlaces[updatedPlaceIndex] = new Place(
        oldPlace.id,
        title,
        description,
        oldPlace.imageUrl,
        oldPlace.price,
        oldPlace.availableFrom,
        oldPlace.availableTo,
        oldPlace.userId);
      this._places.next(updatedPlaces);
    }));
  }
}
