import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicErrorComponent } from './components/dynamic-error/dynamic-error.component';;
import { FormService } from '../services/form.service';
import { Field } from '../models/input.model';
import { SubmitButtonComponent } from './components/dynamic-field/components/submit-button/submit-button.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFieldComponent,
    DynamicErrorComponent,
    SubmitButtonComponent
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup: FormGroup;
  fields:Field[];
  @Input() model:any;
  @Input() class:string;
  @Input() submitButtonName:string;

  constructor(private formService: FormService) {}

  ngOnInit() {
    let form = this.formService.buildForm(this.model);
    this.dynamicFormGroup = form.formgroup;
    this.fields = form.fields;
  }
  onSubmitForm() {
    // To get the values from the form
    Object.keys(this.model).forEach((k) => {
      console.log(this.dynamicFormGroup.get(k).value);
    });
    console.log(JSON.stringify(this.dynamicFormGroup.value));
  }
}
