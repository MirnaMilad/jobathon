import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from 'src/app/features/details/details-routing.module';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';
import { BtnDropdownComponent } from '../btn-dropdown/btn-dropdown.component';
import { DetailsService } from 'src/app/features/details/services/details.service';

@Component({
  selector: 'app-shared-converter',
  standalone: true,
  imports: [
    CommonModule,
    DetailsRoutingModule,
    DynamicFormComponent,
    BtnDropdownComponent,
  ],
  templateUrl: './shared-converter.component.html',
  styleUrls: ['./shared-converter.component.scss'],
})
export class SharedConverterComponent {
  currencyArr: string[];
  inputs;
  constructor(private detailsService: DetailsService) {
    this.getCurrencyArr();

    this.inputs = this.detailsService.inputs;
  }
  getCurrencyArr() {
    this.detailsService.getCurrencyArr().subscribe((res) => {
      this.currencyArr = Object.keys(res['symbols']);
    });
  }
}
