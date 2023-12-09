import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  buildForm(model) {
    let formgroup: FormGroup;
    const formGroupFields = this.getFormControlsFields(model);
    // Creating the form Builer
    formgroup = new FormGroup(formGroupFields.formGroupFields);
    let fields = formGroupFields.fields;
    return { formgroup, fields };
  }

  getFormControlsFields(model) {
    const formGroupFields = {};
    let fields = [];
    for (const field of Object.keys(model)) {
      const fieldProps = model[field];
      const validators = this.addValidator(fieldProps.rules); // To Add validators to each field
      this.createFormControl(
        fieldProps,
        field,
        formGroupFields,
        validators,
        fields
      );
    }
    return { formGroupFields, fields };
  }

  createFormControl(fieldProps, field, formGroupFields, validators, fields) {
    if (fieldProps['type'] !== 'input-group') {
      fields.push({ ...fieldProps, fieldName: field }); // To Add field Name (key in model) in the fields
      formGroupFields[field] = new FormControl(fieldProps.value, validators); // To Create (new FormControl) to each key of the Object and put it in formGroupFields
    } else {
      let form = this.buildForm(fieldProps['subModel']);
      fields.push({
        ...fieldProps,
        fieldName: field,
        subFields: form.fields,
      });
      formGroupFields[field] = form.formgroup;
    }
  }

  private addValidator(rules) {
    // if it has no validators it will send empty array in  validators
    if (!rules) {
      return [];
    }
    // if it has rules it will add it as a validator
    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        //add more cases for the future.
        default:
          return null;
      }
    });
    return validators;
  }
}
