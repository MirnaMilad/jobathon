import { cardDetails } from '../../models/home.model';
import { HomeService } from './../../services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
cardsDetails:cardDetails[];

constructor(private homeService : HomeService){
this.cardsDetails = this.homeService.cardsDetails;
}
}
