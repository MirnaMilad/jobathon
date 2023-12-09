import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  inputs;
  cardsDetails;
  constructor(private httpClient: HttpClient) {
    this.inputs = {
      amount: {
        type: 'number',
        value: 1,
        col: 'col-md-7 col-12 pb-3',
        label: 'Amount',
        rules: {
          required: true,
        },
      },
    };
  }

  getCurrencyArr() {
    const url = `${environment.apiUrl}/symbols?access_key=6bd4f9b86242e656a732bf832f13a409`;
    return this.httpClient.get(url);
  }
}
