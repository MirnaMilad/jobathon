import { Injectable } from '@angular/core';
import { MenutItem } from '../models/menu-header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  menuItems: MenutItem[] = [
    {
      name: 'EUR-USD Details',
      path: '/details',
    },
    {
      name: 'EUR-GBP Details',
      path: '/details',
    }
  ];
  constructor() {}
}
