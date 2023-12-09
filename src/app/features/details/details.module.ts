import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { DynamicFormComponent } from 'src/app/shared/dynamic-form/dynamic-form.component';
import { BtnDropdownComponent } from 'src/app/shared/components/btn-dropdown/btn-dropdown.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    DynamicFormComponent,
    BtnDropdownComponent,
    HttpClientModule
  ]
})
export class DetailsModule { }
