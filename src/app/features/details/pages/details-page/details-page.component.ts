import { DetailsService } from './../../services/details.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {
inputs;
currencyArr:string[];
constructor(private detailsService : DetailsService){
  this.inputs = this.detailsService.inputs;
  this.getCurrencyArr();
}

getCurrencyArr(){
  this.detailsService.getCurrencyArr().subscribe(
    res=>{
      this.currencyArr = Object.keys(res['symbols'])
    }

  )
}
}
