import { Injectable } from '@angular/core';
import { cardDetails } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  cardsDetails:cardDetails[]
  constructor() {
    this.cardsDetails=[
      {
        from:'1 USD',
        to:'Eur',
        result:'0.93 Euro'
      },
      {
        from:'1 USD',
        to:'Eur',
        result:'0.93 Euro'
      },
      {
        from:'1 USD',
        to:'Eur',
        result:'0.93 Euro'
      },
    ]
   }
}
