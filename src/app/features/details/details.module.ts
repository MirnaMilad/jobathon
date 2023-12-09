import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form/dynamic-form.component';
import { BtnDropdownComponent } from 'src/app/shared/components/btn-dropdown/btn-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedConverterComponent } from 'src/app/shared/components/shared-converter/shared-converter.component';

@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedConverterComponent
  ]
})
export class DetailsModule { }
